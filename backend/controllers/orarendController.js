import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//@desc Órarend szerkesztése
//@route PUT /api/orarend/oraModositas
//@access private
const orarendModositas = async (req, res) => {
  const { jogkor_id} = req.user.user; // A claims-ból kiolvassuk az ID-t
  if(jogkor_id == 1)
    return res.status(403).json("Tanuló nem módosíthat órát!");

  const { id } = req.user.user;

  const ora_id = req.body.ora_id;
  if (!ora_id)
    return res.status(406).json("Nincs megadva id!");

  const ora_kezdete = new Date(req.body.idopont_eleje);
  const ora_vege = req.body.idopont_vege;
  const ora_cim = req.body.cim;
  const ora_helyszin = req.body.helyszin;
  const tanulo_id = req.body.felhasznalo_id;

  const ora = await prisma.orak.findFirst({
    where: {
      ora_id: ora_id
    }
  });

  const orarend = await prisma.orarend.findFirst({
    where: {
      ora_id: ora.ora_id
    }
  });

  if (orarend.tanar_id != id) return res.status(403).json("Csak a saját óráját módosíthatja!");

  res.json("OK");
  //orarend adatainak szerkesztése
};


//@desc Új óra létrehozása
//@route POST /api/orarend/oraLetrehozas
//@access private
const oraLetrehozas = (async (req, res) => {
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

  if(!body_idopont_eleje || !body_idopont_vege || !body_cim || !body_helyszin || !body_felhasznalo_id)
  {
    return res.status(406).json("Nincs minden adat megadva!");
  }
  
  if (isNaN(body_idopont_eleje.getTime()) || isNaN(body_idopont_vege.getTime()))
  {
    return res.status(406).json({error: "A dátum nem helyes!"});
  }
  body_idopont_eleje.addHours(1);
  body_idopont_vege.addHours(1);

  if (!Number.isInteger(body_felhasznalo_id))
  {
    return res.status(406).json({ error: "Az id-nek számnak kell lennie!" });
  }
  
  //Felviszem az orak táblába a rekordot

  try {
    await prisma.orak.create({
      data: {
        idopont_eleje: body_idopont_eleje,
        idopont_vege: body_idopont_vege,
        cim: body_cim,
        helyszin: body_helyszin
      }
    }); 
    console.log("Óra felvéve...")

    //A felvitt rekord id-je
    const felvitt_ora_max_id = await prisma.orak.aggregate({
      _max: {
        ora_id: true
      }
    });
    const felvitt_ora_id = felvitt_ora_max_id._max.ora_id;
    
    //Felviszem a kapcsolótáblába az adatokat
    await prisma.orarend.create({
      data:{
        ora_id: felvitt_ora_id,
        felhasznalo_id: body_felhasznalo_id
      }
    });
    console.log("Kapcsolótáblába felvéve...")
    res.status(201).json("Az óra sikeresen felkerült a rendszerbe!");
  
  } catch (err)
  {
    return res.status(500).json({
      error: "Az adatot nem sikerült felvinni!",
      errormsg: err
    });
  }
  
});

//@desc orarend lekérdezése
//@route GET /api/orarend/orarendLekeres
//@access public

const orarendLekeres = (async (req, res) => { 
  const { id } = req.user.user;
  const user_id = id;

  if (!Number.isInteger(user_id))
  {
    return res.status(406).json({error: "A ID típusa nem megfelelő!"});
  }

  try {
    const orak = await prisma.orarend.findMany({
      where: {
        felhasznalo_id: user_id
      },
      include: {
        Orak: true
      }
    });
    res.status(202).json(orak);
  }
  catch (err){
    return res.status(500).json({
      error: "Az órákat nem sikerült lekérdezni",
      errormsg: err
    });
  }
}); 

//@desc Óra törlése id alapján
//@route POST /api/orarend/oraTorles
//@access private
const oraTorles = (async (req, res) => {
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
  // if (ora.felhasznalo_id != id) {
  //   return res.status(401).json({ err: "Csak a saját óráját törölheti!" });
  // }

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
});

export { orarendModositas, orarendLekeres, oraLetrehozas, oraTorles };
