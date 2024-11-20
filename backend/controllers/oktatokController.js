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

export { oktatokLekerese }