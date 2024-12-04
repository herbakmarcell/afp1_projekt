import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

//@desc Összes oktató lekérése
//@route GET /api/oktatok/oktatolista
//@access private

const oktatokLekerese = async (req, res) => {
    try {
        const oktatok = await prisma.felhasznalok.findMany({
            where: {
                jogkor_id: 2,
            },
            select: {
                felhasznalo_id: true,
                email: true,
                vezeteknev: true,
                keresztnev: true,
            }
        })

        res.json(oktatok);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Hiba történt az oktatók lekérdezése során!" })
    }
}

//@desc A tanuló kiválaszthatja az oktatóját
//@route POST /api/oktatok/kivalasztas
//@access private
const oktatoValasztas = async (req, res) => {
    const azon = req.user.user.id //felhasznalo_id
    const {jogkor_id} = req.user.user
    const {oktato_id} = req.body
    
    if (jogkor_id != 1)  { // tanulo id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }

    try {
        let tanuloElorehaladas = await prisma.tanuloElorehaladas.findUnique({
          where: {
            tanulo_id: azon,
          },
        });

        if (tanuloElorehaladas) {
            return res.status(400).json({ message: 'Már van oktatód!' });
        }

        let oktatoLetezik = await prisma.felhasznalok.findUnique({
            where: {
                felhasznalo_id: oktato_id,
            }
        });

        if (!oktatoLetezik) {
            return res.status(404).json({ message: 'Az oktató nem létezik!' });
        }

        tanuloElorehaladas = await prisma.tanuloElorehaladas.create({
            data: {
              tanulo_id: azon,
              oktato_id: oktato_id,
            },
        });
        res.status(201).json({
          message: 'Sikeresen kiválasztottad az oktatódat.',
          tanuloElorehaladas,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt az oktató kiválasztása során.' });
    }
}

export { oktatokLekerese, oktatoValasztas }
