
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
  
const oraLetrehozas = (async (req, res) => {
  const { jogkor_id } = req.user.user;
  if (jogkor_id == 1) {
    return res.status(403).json("Tanuló nem hozhat létre új órát!");
  }
});
export { orarendModositas, oraLetrehozas }