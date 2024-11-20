import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//@desc Oktatók tanulóinak lekérdezése
//@route GET /api/tanulok/oktatoTanuloi
//@access private
const oktatoTanuloi = async (req, res) => {
  const azon = req.user.user.id; //felhasznalo_id
  const { jogkor_id } = req.user.user;

  if (jogkor_id != 2) {
    // oktato id
    return res.status(403).send({
      message: "Hozzáférés megtagadva",
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
    res
      .status(500)
      .json({ error: "Hiba történt a tanulók lekérdezése során." });
  }
};

//@desc A tanulók lekérdezése a rendszerből
//@route GET /api/tanulok/tanulok
//@access private
const tanulokLekerese = async (req, res) => {
  const { jogkor_id } = req.user.user;

  if (jogkor_id == 1) {
    return res.status(403).json({ error: "Nem kérdezheti le a tanulókat!" });
  }

  try {
    const tanulok = await prisma.felhasznalok.findMany({
      where: {
        jogkor_id: 1,
      },
      select: {
        felhasznalo_id: true,
        email: true,
        vezeteknev: true,
        keresztnev: true,
      },
    });
    if (!tanulok) {
      return res
        .status(500)
        .json({ error: "Hiba történt a tanulók lekérdezése során." });
    }

    return res.json(tanulok);
  } catch (err) {
    return res.status(500).json({
      error: "A lekérdezés sikertelen!",
      errormsg: err,
    });
  }
};

//@desc Adott tanuló előrehaladásának lekérdezése
//@route GET /api/tanulok/elorehaladas/:tanulo_id
//@access private
const tanuloElorehaladasa = (async (req, res) => {
  const azon = req.user.user.id
  const { jogkor_id } = req.user.user
  const { tanuloId } = req.params;
  
  if (jogkor_id != 2)  { // oktato id
    return res.status(403).send({
      message: 'Hozzáférés megtagadva'
    });
  }

  try {
      const tanuloElorehaladas = await prisma.tanuloElorehaladas.findUnique({
        where: {
          tanulo_id: parseInt(tanuloId),
        },
        include: {
          FelhasznalokTanulo: {
            select: {
              vezeteknev: true,
              keresztnev: true,
            },
          },
          FelhasznalokOktato: {
            select: {
              felhasznalo_id: true,
            }
          },
          Vizsgajelentkezes: {
            include: {
              Vizsgak: {
                select: {
                  sikeres: true,
                  VizsgaTipus: {
                    select: {
                      tipus: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!tanuloElorehaladas) {
        return res.status(404).json({
          message: 'A tanuló nem található',
        });
      }

      if (tanuloElorehaladas.FelhasznalokOktato?.felhasznalo_id !== azon) {
        return res.status(403).send({
          message: 'Hozzáférés megtagadva: Az adott tanulónak nem ön az oktatója.',
        });
      }
      
      const vizsgak = {
        eu: false,
        elmeleti: false,
        gyakorlati: false,
      };
  
      tanuloElorehaladas.Vizsgajelentkezes.forEach((jelentkezes) => {
        const vizsga = jelentkezes.Vizsgak;
        if (vizsga.sikeres) {
          switch (vizsga.VizsgaTipus.tipus) {
            case 'eü':
              vizsgak.eu = true;
              break;
            case 'elméleti':
              vizsgak.elmeleti = true;
              break;
            case 'gyakorlati':
              vizsgak.gyakorlati = true;
              break;
          }
        }
      });

      res.json({
        tanuloNeve: `${tanuloElorehaladas.FelhasznalokTanulo.vezeteknev} ${tanuloElorehaladas.FelhasznalokTanulo.keresztnev}`,
        levezetettOrak: tanuloElorehaladas.levezetett_orak,
        vizsgak: vizsgak,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hiba történt a tanulók lekérdezése során.' });
    }
});

export { oktatoTanuloi, tanulokLekerese, tanuloElorehaladasa}
