
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
export { orarendModositas }