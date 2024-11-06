
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

//@desc Órarend szerkesztése
//@route GET /api/orarend/orarendModositas
//@access private
const orarendModositas = (async (req, res) => {

    const {jogkor_id, email} = req.user.user // A claims-ból kiolvassuk az ID-t
    
    res.json({user: req.user.user})
 
    //orarend adatainak szerkesztése
  
});
  
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
  Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
  }

  const body_idopont_eleje = new Date(req.body.idopont_eleje).addHours(1);
  const body_idopont_vege = new Date(req.body.idopont_vege).addHours(1);
  const body_cim = req.body.cim;
  const body_helyszin = req.body.helyszin;
  const body_felhasznalo_id = req.body.felhasznalo_id;

  if(!body_idopont_eleje || !body_idopont_vege || !body_cim || !body_helyszin || !body_felhasznalo_id)
  {
    return res.status(406).json("Nincs minden adat megadva!");
  }

  console.log("OK");
  console.log(body_idopont_eleje);
  console.log(body_idopont_vege);
  console.log(body_cim);
  console.log(body_helyszin);
  console.log(body_felhasznalo_id);

  
 

  //Felviszem az orak táblába a rekordot
  console.log("Óra felvitele...")
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

  const felvitt_ora_id = felvitt_ora_max_id._max.ora_id
  console.log("felvitt óra id-je:" + felvitt_ora_id);
  
  console.log("Kapcsolótáblába felvitel...");
  //Felviszem a kapcsolótáblába az adatokat
  await prisma.orarend.create({
    data:{
      ora_id: felvitt_ora_id,
      felhasznalo_id: body_felhasznalo_id
    }
  });
  console.log("Kapcsolótáblába felvéve...")
  res.status(201).json("Az óra sikeresen felkerült a rendszerbe!");

});

//@desc Órák lekérdezése
//@route GET /api/orarend/orarendLekeres
//@access private
const orarendLekeres = (async (req, res) => { 
  const { id } = req.user.user;
  const user_id = id;
  const orak = await prisma.orarend.findMany({
    where: {
      felhasznalo_id: user_id
    },
     include: {
      Orak: true
    }
  });
  
  if (!orak)
    return res.status(500).json({error: "Az órákat nem sikerült lekérdezni"});
  res.status(202).json(orak);
}); 

export { orarendModositas, orarendLekeres, oraLetrehozas }
