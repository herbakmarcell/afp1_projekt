import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

//@desc Oktatók tanulóinak lekérdezése
//@route POST /api/tanulok/oktatoTanuloi
//@access private
const oktatoTanuloi = (async (req, res) => {

    const azon = req.user.user.id //felhasznalo_id
    const {jogkor_id} = req.user.user
    
    if (jogkor_id != 2)  { // oktato id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }

    try {
        const tanulok = await prisma.felhasznalok.findMany({
          where: {
            TanuloElorehaladas: {
              some: {
                oktato_id: azon,
              },
            },
          },
          select: {
            vezeteknev: true,
            keresztnev: true,
          },
        });
    
        res.json(tanulok);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt a tanulók lekérdezése során.' });
      }
  });
export { oktatoTanuloi }