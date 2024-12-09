import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//@desc Oktatók tanulóinak lekérdezése
//@route POST /api/tanulok/oktatoTanuloi
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
        felhasznalo_id: true,
        vezeteknev: true,
        keresztnev: true,
        email: true,
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

//@desc Adott tanuló előrehaladásának lekérdezése (ezt az oktató kéri le)
//@route POST /api/tanulok/elorehaladas
//@access private
const tanuloElorehaladasa = async (req, res) => {
  const azon = req.user.user.id;
  const { jogkor_id } = req.user.user;
  const { tanuloId } = req.body;

  if (jogkor_id != 2) {
    // oktato id
    return res.status(403).send({
      message: "Hozzáférés megtagadva",
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
          },
        },
        Vizsgajelentkezes: {
          select: {
            jelentkezes_datuma: true,
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
        message: "A tanuló nem található",
      });
    }

    if (tanuloElorehaladas.FelhasznalokOktato?.felhasznalo_id !== azon) {
      return res.status(403).send({
        message:
          "Hozzáférés megtagadva: Az adott tanulónak nem ön az oktatója.",
      });
    }

    const vizsgak = {
      eu: { sikeres: false, jelentkezesDatuma: null },
      elmeleti: { sikeres: false, jelentkezesDatuma: null },
      gyakorlati: { sikeres: false, jelentkezesDatuma: null },
    };

    tanuloElorehaladas.Vizsgajelentkezes.forEach((jelentkezes) => {
      const vizsga = jelentkezes.Vizsgak;

      if (vizsga && vizsga.VizsgaTipus) {
        const tipus = vizsga.VizsgaTipus.tipus;
        const rawDatum = jelentkezes.jelentkezes_datuma;

        // Dátum formázása
        const formattedDate = rawDatum
          ? rawDatum.toLocaleString("hu-HU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          : null;

        switch (tipus) {
          case "eü":
            vizsgak.eu = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
            break;
          case "elméleti":
            vizsgak.elmeleti = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
            break;
          case "gyakorlati":
            vizsgak.gyakorlati = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
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
    res
      .status(500)
      .json({ error: "Hiba történt a tanulók lekérdezése során." });
  }
};

//@desc Adott tanuló saját előrehaladása
//@route GET /api/tanulok/sajatElorehaladas
//@access private
const tanuloSajatHaladasa = async (req, res) => {
  const tanuloId = req.user.user.id; // A bejelentkezett tanuló azonosítója
  const { jogkor_id } = req.user.user;

  if (jogkor_id != 1) {
    // tanulo id
    return res.status(403).send({
      message: "Hozzáférés megtagadva",
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
        Vizsgajelentkezes: {
          select: {
            jelentkezes_datuma: true,
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
        message: "A tanuló nem található",
      });
    }

    const vizsgak = {
      eu: { sikeres: false, jelentkezesDatuma: null },
      elmeleti: { sikeres: false, jelentkezesDatuma: null },
      gyakorlati: { sikeres: false, jelentkezesDatuma: null },
    };

    tanuloElorehaladas.Vizsgajelentkezes.forEach((jelentkezes) => {
      const vizsga = jelentkezes.Vizsgak;

      if (vizsga && vizsga.VizsgaTipus) {
        const tipus = vizsga.VizsgaTipus.tipus;
        const rawDatum = jelentkezes.jelentkezes_datuma;

        // Dátum formázása
        const formattedDate = rawDatum
          ? rawDatum.toLocaleString("hu-HU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          : null;

        switch (tipus) {
          case "eü":
            vizsgak.eu = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
            break;
          case "elméleti":
            vizsgak.elmeleti = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
            break;
          case "gyakorlati":
            vizsgak.gyakorlati = {
              sikeres: vizsga.sikeres,
              jelentkezesDatuma: formattedDate,
            };
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
    res.status(500).json({
      error: "Hiba történt a tanuló előrehaladásának lekérdezése során.",
    });
  }
};

export {
  oktatoTanuloi,
  tanulokLekerese,
  tanuloElorehaladasa,
  tanuloSajatHaladasa,
};
