import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//A megadott idő valamiért 1 órával kevesebb,
//ezért hozzáadok 1 órát a fügvénnyel
Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
};

const orarendModositas = async (req, res) => {
  const { jogkor_id } = req.user.user; // A claims-ból kiolvassuk az ID-t
  if (jogkor_id == 1)
    return res.status(403).json("Tanuló nem módosíthat órát!");

  const { id } = req.user.user;

  const ora_id = req.body.ora_id;
  if (!ora_id) return res.status(406).json("Nincs megadva id!");

  let ora_kezdete = req.body.idopont_eleje;
  let ora_vege = req.body.idopont_vege;
  const ora_cim = req.body.cim;
  const ora_helyszin = req.body.helyszin;
  const tanulo_id = req.body.felhasznalo_id;
  const mai_datum = new Date();
  console.log("Mai dátum: " + mai_datum);

  const ora = await prisma.orak.findFirst({
    where: {
      ora_id: ora_id,
    },
  });

  const orarend = await prisma.orarend.findFirst({
    where: {
      ora_id: ora.ora_id,
    },
  });

  if (orarend.tanar_id != id)
    return res.status(403).json({ err: "Csak a saját óráját módosíthatja!" });

  //Ebbe gyűjtöm össze az adatokat, amit updatelni kell
  const ora_update = {};
  const hibak = {};
  if (ora_kezdete) {
    ora_kezdete = new Date(ora_kezdete);
    if (
      !isNaN(ora_kezdete.getTime()) &&
      ora_kezdete >= mai_datum &&
      (!ora_vege || ora_kezdete < ora_vege)
    )
      ora_update["idopont_eleje"] = ora_kezdete.addHours(1);
    else
      hibak.ora_kezdete = "Az óra kezdete nem megfelelő, nem lesz updatelve!";
  }

  if (ora_vege) {
    ora_vege = new Date(ora_vege);
    if (
      !isNaN(ora_vege) &&
      ((!ora_eleje && ora_vege > mai_datum) || ora_vege > ora_eleje)
    )
      ora_update["idopont_vege"] = ora_vege.addHours(1);
    else hibak.ora_vege = "Az óra vége nem megfelelő, nem lesz updatelve!";
  }

  if (ora_cim) {
    if (ora_cim.trim().length > 0) ora_update["cim"] = ora_cim;
    else hibak.cim = "Az óra címe nem lehet üres, nem lesz updatelve!";
  }

  if (ora_helyszin) {
    if (ora_helyszin.trim().length > 0) ora_update["helyszin"] = ora_helyszin;
    else hibak.helszin = "A helyszín nem lehet üres, nem lesz updatelve!";
  }

  if (tanulo_id) {
    if (isInteger(tanulo_id)) ora_update["tanulo_id"] = tanulo_id;
    else hibak.tanulo_id = "A tanuló ID nem megfelelő, nem lesz updatelve!";
  }

  if (Object.keys(ora_update) != 0 && Object.keys(hibak) == 0) {
    try {
      const orarend_update = await prisma.orak.update({
        where: {
          ora_id: ora_id,
        },
        data: ora_update,
      });
      if (orarend_update)
        return res.status(201).json({ res: "A módosítás sikeres!" });
      else
        return res.status(500).json({
          err: "Nem sikerült módosítani az órát, próbálja meg újra!",
        });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: "Nem sikerült módosítani az órát, szerverhiba miatt!" });
    }
  }

  if (Object.keys(hibak) != 0) return res.status(401).json(hibak);
  return res
    .status(200)
    .json({ msg: "Nem volt megadva adat, amit módosítani kéne!" });
};

//@desc Új óra létrehozása
//@route POST /api/orarend/oraLetrehozas
//@access private
const oraLetrehozas = async (req, res) => {
  const { jogkor_id } = req.user.user;
  if (jogkor_id == 1) {
    return res.status(403).json("Tanuló nem hozhat létre új órát!");
  }

  //A megadott idő valamiért 1 órával kevesebb,
  //ezért hozzáadok 1 órát a fügvénnyel

  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };

  const body_idopont_eleje = new Date(req.body.idopont_eleje);
  const body_idopont_vege = new Date(req.body.idopont_vege);
  const body_cim = req.body.cim;
  const body_helyszin = req.body.helyszin;
  const body_felhasznalo_id = req.body.felhasznalo_id;
  const { id } = req.user.user;
  console.log("Felhasználó id-je: " + id);
  if (
    !body_idopont_eleje ||
    !body_idopont_vege ||
    !body_cim ||
    !body_helyszin ||
    !body_felhasznalo_id ||
    !id
  ) {
    return res.status(406).json("Nincs minden adat megadva!");
  }

  if (
    isNaN(body_idopont_eleje.getTime()) ||
    isNaN(body_idopont_vege.getTime())
  ) {
    return res.status(406).json({ error: "A dátum nem helyes!" });
  }
  body_idopont_eleje.addHours(1);
  body_idopont_vege.addHours(1);

  if (!Number.isInteger(body_felhasznalo_id)) {
    return res.status(406).json({ error: "Az id-nek számnak kell lennie!" });
  }
  const tanulo = await prisma.felhasznalok.findFirst({
    where: {
      felhasznalo_id: body_felhasznalo_id,
    },
  });
  if (!tanulo)
    return res.status(406).json("Nincs felhasználó a megadott id-vel!");
  if (tanulo.jogkor_id != 1)
    return res.status(406).json("Csak tanulónak lehet órát felvinni!");
  if (!Number.isInteger(id)) {
    return res.status(406).json({ error: "Az id-nek számnak kell lennie!" });
  }

  //Felviszem az orak táblába a rekordot

  try {
    await prisma.orak.create({
      data: {
        idopont_eleje: body_idopont_eleje,
        idopont_vege: body_idopont_vege,
        cim: body_cim,
        helyszin: body_helyszin,
      },
    });
    console.log("Óra felvéve...");

    //A felvitt rekord id-je
    const felvitt_ora_max_id = await prisma.orak.aggregate({
      _max: {
        ora_id: true,
      },
    });
    const felvitt_ora_id = felvitt_ora_max_id._max.ora_id;

    //Felviszem a kapcsolótáblába az adatokat
    await prisma.orarend.create({
      data: {
        ora_id: felvitt_ora_id,
        tanulo_id: body_felhasznalo_id,
        tanar_id: id,
      },
    });
    console.log("Kapcsolótáblába felvéve...");
    res.status(201).json("Az óra sikeresen felkerült a rendszerbe!");
  } catch (err) {
    return res.status(500).json({
      error: "Az adatot nem sikerült felvinni!",
      errormsg: err,
    });
  }
};

//@desc orarend lekérdezése
//@route GET /api/orarend/orarendLekeres
//@access public
const orarendLekeres = async (req, res) => {
  const { id, jogkor_id } = req.user.user;

  if (!Number.isInteger(id)) {
    return res.status(406).json({ error: "A ID típusa nem megfelelő!" });
  }

  try {
    let ora;
    switch (jogkor_id) {
      //tanuló
      case 1:
        ora = await prisma.orarend.findMany({
          where: {
            tanulo_id: id,
            Tanar: {
              aktiv: true,
            },
          },
          select: {
            Orak: true,
            tanar_id: true,
            Tanar: {
              select: {
                vezeteknev: true,
                keresztnev: true,
              },
            },
          },
        });
        if (!ora)
          return res
            .status(500)
            .json("Hiba a lekérdezés során, próbálja újra!");

        return res.status(202).json(ora);

        break;
      //oktató
      case 2:
        ora = await prisma.orarend.findMany({
          where: {
            tanar_id: id,
            Tanulo: { aktiv: true },
          },
          select: {
            Orak: true,
            tanulo_id: true,
            Tanulo: {
              select: {
                vezeteknev: true,
                keresztnev: true,
              },
            },
          },
        });
        if (!ora)
          return res
            .status(500)
            .json("Hiba a lekérdezés során, próbálja újra!");
        return res.status(202).json(ora);
        break;
      case 4:
        const tanar_id = req.body.tanar_id;
        const tanulo_id = req.body.tanulo_id;
        let felh_obj = {
          Tanar: {
            aktiv: true,
          },
          Tanulo: {
            aktiv: true,
          },
        };
        if (tanar_id) {
          if (!Number.isInteger(tanar_id))
            return res
              .status(406)
              .json("A tanar_id-nek egész számnak kell lennie.");
          felh_obj["tanar_id"] = tanar_id;
        }

        if (tanulo_id) {
          if (!Number.isInteger(tanulo_id))
            return res
              .status(406)
              .json("A tanulo_id-nek egész számnak kell lennie.");
          felh_obj["tanulo_id"] = tanulo_id;
        }

        ora = await prisma.orarend.findMany({
          where: felh_obj,
          select: {
            Orak: true,
            tanulo_id: true,
            Tanulo: {
              select: {
                vezeteknev: true,
                keresztnev: true,
              },
            },
            tanar_id: true,
            Tanar: {
              select: {
                vezeteknev: true,
                keresztnev: true,
              },
            },
          },
        });
        res.status(202).json(ora);
        break;
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "Hiba a lekérdezés során, próbálja meg újra!" });
  }
};

//@desc Óra törlése id alapján
//@route POST /api/orarend/oraTorles
//@access private
const oraTorles = async (req, res) => {
  const { id, jogkor_id } = req.user.user;

  if (!id) return res.status(401).json("Jelentkezzen be!");

  if (jogkor_id == 1) return res.status(406).json("Tanuló nem törölhet órát!");

  const ora_id = req.body.ora_id;
  if (!ora_id) return res.status(406).json("Adja meg az óra id-t!");
  if (!Number.isInteger(ora_id))
    return res.status(406).json("Az id-nek egész számnak kell lennie!");

  const ora = await prisma.orarend.findFirst({
    where: {
      ora_id: ora_id,
    },
  });

  if (!ora) {
    return res.status(202).json("Nincs ilyen óra a rendszerben!");
  }
  //A tanár nem tudja, csak azokat az órákat törölni, amelynél, az ő ID-je szerepel
  if (ora.felhasznalo_id != id) {
    return res.status(401).json({ err: "Csak a saját óráját törölheti!" });
  }

  try {
    const oraTorles = await prisma.orak.delete({
      where: {
        ora_id: ora_id,
      },
    });

    if (oraTorles) return res.status(200).json("A törlés sikeres!");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "A törlés sikertelen!" });
  }
};

export { orarendModositas, orarendLekeres, oraLetrehozas, oraTorles };
