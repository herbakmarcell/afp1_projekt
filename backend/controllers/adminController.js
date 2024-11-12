import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

//@desc Összes felhasználó lekérdezése
//@route POST /api/admin/felhasznalok
//@access private
const osszesFelhasznalo = (async (req, res) => {
    const {jogkor_id} = req.user.user
    if (jogkor_id != 4) { // admin id
        return res.status(403).send({
            message: 'Hozzáférés megtagadva!'
        })
    }

    try {
        const felhasznalok = await prisma.felhasznalok.findMany({
            select: {
                vezeteknev: true,
                keresztnev: true,
                email: true,
                jelszo: true,
                jogkor_id: true
            }
        });
        res.json(felhasznalok);
    } catch (error) {
        res.status(500).json({ error: 'Hiba történt a felhasználók adatainak lekérdezése során.' });
    }
})

export { osszesFelhasznalo }