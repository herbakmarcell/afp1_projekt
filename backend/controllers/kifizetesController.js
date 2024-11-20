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

//@desc Kifizetés ("számla") felvitele adott tanulónak
//@route POST /api/kifizetes/hozzaadas
//@access private
const kifizetesHozzaadas = async (req, res) => {
    const azon = req.user.user.id //felhasznalo_id
    const {jogkor_id} = req.user.user
    const {tanulo_id, targy, osszeg} = req.body
    
    if (jogkor_id != 2)  { // oktato id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }

    try {
        const tanuloElorehaladas = await prisma.tanuloElorehaladas.findUnique({
          where: {
            tanulo_id: tanulo_id,
            oktato_id: azon,
          },
        });
    
        if (!tanuloElorehaladas) {
          return res.status(404).json({ message: 'Ehhez a tanulóhoz más oktató tartozik!' });
        }
    
        const kifizetes = await prisma.kifizetesek.create({
          data: {
            elorehaladas_id: tanuloElorehaladas.elorehaladas_id,
            targy,
            osszeg,
          },
        });
    
        return res.status(201).json({
          message: 'A kifizetés sikeresen rögzítve.',
          kifizetes,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Hiba történt a kifizetés rögzítése során.' });
    }
}

//@desc Adott tanuló kifizetéseinek végrehajtása
//@route PUT /api/kifizetes/vegrehajtas
//@access private
const kifizetesVegrehajtasa = async (req,res) => {
    const azon = req.user.user.id //felhasznalo_id
    const {jogkor_id} = req.user.user
    
    if (jogkor_id != 1)  { // tanulo id
      return res.status(403).send({
        message: 'Hozzáférés megtagadva'
      });
    }

    try {
        const tanuloElorehaladas = await prisma.tanuloElorehaladas.findUnique({
          where: {
            tanulo_id: azon,
          },
        });
    
        if (!tanuloElorehaladas) {
          return res.status(404).json({ message: 'Nem található előrehaladás.' });
        }
    
        const kifizetes = await prisma.kifizetesek.updateMany({
          where: {
            elorehaladas_id: tanuloElorehaladas.elorehaladas_id,
            kifizetve: false,
          },
          data: {
            kifizetve: true,
          },
        });
    
        if (kifizetes.count === 0) {
          return res.status(400).json({ message: 'Nincsenek kifizetések.' });
        }
    
        return res.status(200).json({
          message: `A kifizetések sikeresen végrehajtva.`,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Hiba történt a kifizetések végrehajtása során.' });
    }
}


export { tanuloKifizetesei, kifizetesHozzaadas, kifizetesVegrehajtasa }