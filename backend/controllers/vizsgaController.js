import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//@desc Elérhető vizsgák lekérdezése
//@route GET /api/vizsga/vizsgak
//@access private
const elerhetoVizsgak = async (req, res) => {
    const { jogkor_id } = req.user.user;

    if (jogkor_id != 1) { // tanulo_id
        return res.status(403).send({
            message: 'Hozzáférés megtagadva',
        });
    }

    try {
        const vizsgak = await prisma.vizsgak.findMany({
            where: {
                Vizsgajelentkezes: {
                    none: {},
                },
            },
            select: {
                vizsga_id: true,
                vizsga_datuma: true,
                VizsgaTipus: {
                    select: {
                        tipus: true,
                    },
                },
                Felhasznalok: {
                    select: {
                        vezeteknev: true,
                        keresztnev: true,
                    },
                },
            },
        });

        const result = vizsgak.map((vizsga) => {
            const vizsga_datuma = new Date(vizsga.vizsga_datuma);
            vizsga_datuma.setHours(vizsga_datuma.getHours() - 1);
            const formattedDate = vizsga_datuma.toLocaleString('hu-HU', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })

            return {
                vizsga_id: vizsga.vizsga_id,
                vizsga_tipus: vizsga.VizsgaTipus.tipus,
                vizsgabiztos_neve: vizsga.Felhasznalok
                    ? `${vizsga.Felhasznalok.vezeteknev} ${vizsga.Felhasznalok.keresztnev}`
                    : null,
                vizsga_datuma: formattedDate
            };
        });

        return res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hiba történt az elérhető vizsgák lekérdezése során.' });
    }
};

export { elerhetoVizsgak };