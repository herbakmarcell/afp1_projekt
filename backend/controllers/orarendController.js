
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

//@desc Órarend szerkesztése
//@route GET /api/orarend/orarendModositas
//@access private
const orarendModositas = (async (req, res) => {

    const {jogkor_id} = req.user.user // A claims-ból kiolvassuk az ID-t
    
    if (jogkor_id == 1)  { // tanulo_id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }
  
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
  const body_idopont_eleje = req.body.idopont_eleje;
  const body_idopont_vege = req.body.idopont_vege;
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

  //A felvitt rekord id-je
  let felvitt_ora_id = await prisma.orak.aggregate({
    _max: {
      ora_id: true
    }
  });
 

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
  
  
  // console.warn("Kapcsolótáblába felvitel...");
  // //Felviszem a kapcsolótáblába az adatokat
  // await prisma.orarend.create({
  //   data:{
  //     ora_id: felvitt_ora_id,
  //     felhasznalo_id: body_felhasznalo_id
  //   }
  // });
  // console.log("Kapcsolótáblába felvéve...")
  

});
export { orarendModositas, oraLetrehozas }