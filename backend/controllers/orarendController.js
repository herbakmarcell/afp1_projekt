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
    return res.status(403).json({ err: "Tanuló nem módosíthat órát!" });

  const { id } = req.user.user;
  
  const ora_id = req.body.ora_id;
  if (!ora_id) return res.status(406).json({ err: "Nincs megadva id!" });
  if (!Number.isInteger(ora_id))
    return res
      .status(406)
      .json({ err: "Az id-nek egész számnak kell lennie!" });

  let ora_kezdete = req.body.idopont_eleje;
  let ora_vege = req.body.idopont_vege;
  const ora_cim = req.body.cim;
  const ora_helyszin = req.body.helyszin;
  const tanulo_id = Number(req.body.tanulo_id);
  
  const mai_datum = new Date();
  

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
    console.log("Óra kezdete megadva...");
    ora_kezdete = new Date(ora_kezdete);
   
    if (!isNaN(ora_kezdete.getTime()) && ora_kezdete > mai_datum) {
      
      ora_update["idopont_eleje"] = ora_kezdete.addHours(1);
      
    } else
      hibak.ora_kezdete = "Az óra kezdete nem megfelelő, nem lesz updatelve!";
  }

  if (ora_vege) {
    ora_vege = new Date(ora_vege);
    if (!isNaN(ora_vege) && ora_vege > mai_datum)
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
    if (Number(tanulo_id)) {
      const aktiv_tanulo = await prisma.felhasznalok.findFirst({
        where: {
          felhasznalo_id: tanulo_id,
        },
      });
      if (aktiv_tanulo && aktiv_tanulo.aktiv)
        ora_update["tanulo_id"] = tanulo_id;
      else hibak.tanulo_id = "A megadott tanuló nem létezik, vagy inaktív!";
    } else hibak.tanulo_id = "A tanuló ID nem megfelelő, nem lesz updatelve!";
  }

  if (Object.keys(ora_update) != 0 && Object.keys(hibak) == 0) {
    try {
      const ora = await prisma.orak.findFirst({
        where: {
          ora_id: ora_id,
        },
        select: {
          idopont_vege: true,
          idopont_eleje: true,
        },
      });

     


      

      // Frissítjük az orak táblát is
      const orak_update = await prisma.orak.update({
        where: {
          ora_id: ora_id,
        },
        data: {
          idopont_eleje : ora_update["idopont_eleje"],
          idopont_vege : ora_update["idopont_vege"],
          cim : ora_update["cim"],
          helyszin : ora_update["helyszin"]
        },
      });
   

      if (orak_update)
        return res.status(201).json({ res: "A módosítás sikeres!" });
      else
        return res.status(500).json({
          err: "Nem sikerült módosítani az órát, próbálja meg újra!",
        });
    } catch (err) {
     
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
    return res.status(403).json({ err: "Tanuló nem hozhat létre új órát!" });
  }

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
    return res.status(406).json({ err: "Nincs minden adat megadva!" });
  }

  if (
    isNaN(body_idopont_eleje.getTime()) ||
    isNaN(body_idopont_vege.getTime())
  ) {
    return res.status(406).json({ err: "A dátum nem helyes!" });
  }
  body_idopont_eleje.addHours(1);
  body_idopont_vege.addHours(1);

  if (!Number.isInteger(body_felhasznalo_id)) {
    return res.status(406).json({ err: "Az id-nek számnak kell lennie!" });
  }
  const tanulo = await prisma.felhasznalok.findFirst({
    where: {
      felhasznalo_id: body_felhasznalo_id,
    },
  });
  if (!tanulo && !tanulo.aktiv)
    return res
      .status(406)
      .json({ err: "Nincs aktív felhasználó a megadott id-vel!" });
  if (tanulo.jogkor_id != 1)
    return res.status(406).json({ err: "Csak tanulónak lehet órát felvinni!" });
  if (!Number.isInteger(id)) {
    return res.status(406).json({ err: "Az id-nek számnak kell lennie!" });
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

    res.status(201).json({ msg: "Az óra sikeresen felkerült a rendszerbe!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      err: "Az adatot nem sikerült felvinni!",
    });
  }
};

//@desc orarend lekérdezése
//@route GET /api/orarend/orarendLekeres
//@access public
const orarendLekeres = async (req, res) => {
  const { id, jogkor_id } = req.user.user;

  const user_id = id;

  if (!Number.isInteger(id)) {
    return res.status(406).json({ err: "A ID típusa nem megfelelő!" });
  }
  const felh_id = {};
  if (jogkor_id == 1) felh_id["tanulo_id"] = id;
  else felh_id["tanar_id"] = id;

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
            .json({ err: "Hiba a lekérdezés során, próbálja újra!" });

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
            .json({ err: "Hiba a lekérdezés során, próbálja újra!" });
        
        console.log(ora)
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
              .json({ err: "A tanar_id-nek egész számnak kell lennie." });
          felh_obj["tanar_id"] = tanar_id;
        }

        if (tanulo_id) {
          if (!Number.isInteger(tanulo_id))
            return res
              .status(406)
              .json({ err: "A tanulo_id-nek egész számnak kell lennie." });
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

  if (!id) return res.status(401).json({ err: "Jelentkezzen be!" });

  if (jogkor_id == 1)
    return res.status(406).json({ err: "Tanuló nem törölhet órát!" });

  const ora_id = req.body.ora_id;
  if (!ora_id) return res.status(406).json({ err: "Adja meg az óra id-t!" });
  if (!Number.isInteger(ora_id))
    return res
      .status(406)
      .json({ err: "Az id-nek egész számnak kell lennie!" });

  const ora = await prisma.orarend.findFirst({
    where: {
      ora_id: ora_id,
    },
  });

  if (!ora) {
    return res.status(202).json({ msg: "Nincs ilyen óra a rendszerben!" });
  }
  //A tanár nem tudja, csak azokat az órákat törölni, amelynél, az ő ID-je szerepel
  if (ora.tanar_id != id) {
    return res.status(401).json({ err: "Csak a saját óráját törölheti!" });
  }

  try {
    const oraTorles = await prisma.orak.delete({
      where: {
        ora_id: ora_id,
      },
    });

    if (oraTorles) return res.status(200).json({ msg: "A törlés sikeres!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "A törlés sikertelen!" });
  }
};

//@desc Következő óra lekérése
//@route GET /api/orarend/KovetkezoOra
//@access public
const kovetkezoOra = async (req, res) => {
  const { id, jogkor_id } = req.user.user;
  let felh_id = {};
  if (jogkor_id == 1) felh_id["tanulo_id"] = id;
  else felh_id["tanar_id"] = id;

  try {
    const kovetkezo_ora = await prisma.orarend.findMany({
      take: 1,
      orderBy: [
        {
          Orak: {
            idopont_eleje: "asc",
          },
        },
      ],
      where: felh_id,
      select: {
        Orak: {
          select: {
            cim: true,
            helyszin: true,
            idopont_eleje: true,
            idopont_vege: true,
          },
        },
        Tanar: {
          select: {
            vezeteknev: true,
            keresztnev: true,
          },
        },
        Tanulo: {
          select: {
            vezeteknev: true,
            keresztnev: true,
          },
        },
      },
    });
    console.table(kovetkezo_ora);
    return res.status(200).json(kovetkezo_ora);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ err: "A következő óra lekérdezése során hiba történt!" });
  }
};

export {
  orarendModositas,
  orarendLekeres,
  oraLetrehozas,
  oraTorles,
  kovetkezoOra,
};
