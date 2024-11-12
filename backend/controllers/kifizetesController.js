import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

//@desc Adott tanuló kifizetéseinek lekérése
//@route GET /api/kifizetes/kifizetesek
//@access private

const tanuloKifizetesei = (async (req, res) => {
    const azon = req.user.user.id //felhasznalo_id
    const {jogkor_id} = req.user.user
    
    if (jogkor_id != 1)  { // tanulo id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }

    try {
        const kifizetesek = await prisma.kifizetesek.findMany({
            where: {
                TanuloElorehaladas: {
                    tanulo_id: parseInt(azon)
                }
            },
            include: {
                TanuloElorehaladas: {
                    select: {
                        tanulo_id: true,
                        oktato_id: true
                    }
                }
            }
        });

        res.json(kifizetesek);
    } catch (error) {
        console.error("Hiba a kifizetések lekérdezése során:", error);
        res.status(500).json({ error: "Hiba történt a kifizetések lekérdezése során" });
    }
})

export { tanuloKifizetesei }