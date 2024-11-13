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

//@desc Adott vizsgára jelentkezés
//@route POST /api/vizsga/jelentkezes
//@access private
const vizsgaJelentkezes = async (req, res) => {
    const azon = req.user.user.id;
    const { jogkor_id } = req.user.user;
    const { vizsga_id } = req.body;

    if (jogkor_id != 1) { // tanulo id
        return res.status(403).send({
            message: 'Hozzáférés megtagadva'
        });
    }

    const jelenlegiDatum = new Date();

    try {
        // A vizsga típusának lekérdezése
        const vizsga = await prisma.vizsgak.findUnique({
            where: { vizsga_id: vizsga_id },
            select: { tipus_id: true }
        });

        if (!vizsga) {
            return res.status(404).json({ message: 'A vizsga nem található.' });
        }

        // A tanuló elorehaladas_id-jének lekérdezése
        const elorehaladas = await prisma.tanuloElorehaladas.findFirst({
            where: { tanulo_id: parseInt(azon) },
            select: { elorehaladas_id: true }
        });

        if (!elorehaladas) {
            return res.status(404).json({ message: 'A tanuló előrehaladásának adatai nem találhatóak.' });
        }

        // Ellenőrizzük, hogy van-e jövőbeli jelentkezés ugyanarra a vizsgatípusra
        const letezoJelentkezes = await prisma.vizsgajelentkezes.findFirst({
            where: {
                tanulo_elorehaladas_id: elorehaladas.elorehaladas_id,
                Vizsgak: {
                    tipus_id: vizsga.tipus_id,
                    vizsga_datuma: {
                        gt: jelenlegiDatum
                    }
                }
            }
        });

        if (letezoJelentkezes) {
            return res.status(400).json({
                message: 'Már van egy jövőbeli jelentkezésed erre a vizsgatípusra, nem jelentkezhetsz újra.'
            });
        }

        const ujJelentkezes = await prisma.vizsgajelentkezes.create({
            data: {
                tanulo_elorehaladas_id: elorehaladas.elorehaladas_id,
                vizsga_id: vizsga_id,
            }
        });

        return res.status(201).json({ sikeres: "Success" });
    } catch (error) {
        console.error("Hiba történt a vizsgára jelentkezéskor:", error);
        res.status(500).json({ error: "Hiba történt a vizsgára jelentkezéskor" });
    }
};

export { elerhetoVizsgak, vizsgaJelentkezes };