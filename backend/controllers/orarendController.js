
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

const orarendLekeres = (async (req, res) => { 
  const { id } = req.user.user;
  const user_id = id;
  console.log(user_id);
  const orak = await prisma.orarend.findMany({
    where: {
      felhasznalo_id: user_id
    },
     include: {
      Orak: true
    }
  });
  res.status(202).json(orak);
}); 

export { orarendModositas, orarendLekeres }