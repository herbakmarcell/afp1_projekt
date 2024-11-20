import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = async (req, res) => {
  const { vezeteknev, keresztnev, email, jelszo } = req.body;
  if (!vezeteknev || !keresztnev || !email || !jelszo) {
    return res.status(400).json("Nincsen minden mező kitöltve.");
  }

  const userAvailable = await prisma.felhasznalok.findFirst({
    where: {
      email: email,
    },
  });

  if (userAvailable) {
    return res.status(400).json("A felhasználó már regisztrálva van.");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(jelszo, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await prisma.felhasznalok.create({
    data: {
      vezeteknev,
      keresztnev,
      email,
      jelszo: hashedPassword,
      bankszamla: "",
      jogkor_id: 1,
    },
  });

  console.log({ user });

  if (user) {
    return res.status(201).json({ sikeres: "Success" });
  } else {
    return res.status(400).json("Nem sikerült létrehozni a felhasználót.");
  }
  //res.json({ message: "Register the user" });
};

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = async (req, res) => {
  const { email, jelszo } = req.body;
  console.log(email, jelszo);
  if (!email || !jelszo) {
    return res.status(400).json("All fields are mandatory!");
  }
  const user = await prisma.felhasznalok.findFirst({
    where: {
      email: email,
    },
  });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(jelszo, user.jelszo))) {
    const token = jwt.sign(
      {
        user: {
          vezeteknev: user.vezeteknev,
          keresztnev: user.keresztnev,
          email: user.email,
          id: user.felhasznalo_id,
          jogkor_id: user.jogkor_id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "50m" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ token });
  } else {
    res.status(401).json("email or password is not valid");
  }
};

const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({
    message: "token törlése",
  });
};

//@desc Módosítja a felhasználót az adatbázisban és új token-t generál
//@route POST api/users/profilmodosit
//@access private
const felhasznaloModositas = async (req, res) => {
  const { vezeteknev, keresztnev } = req.body;

  console.log(vezeteknev);
  console.log(keresztnev);
  //A felhasználót update-jük a kapott adatok alapján
  const updateUser = await prisma.felhasznalok.update({
    data: {
      vezeteknev,
      keresztnev,
    },
    where: {
      email: req.user.user.email,
    },
  });
  if (updateUser) {
    //Ha sikerül az update-elés akkor generálunk neki egy új tokent az új adatokkal
    const token = jwt.sign(
      {
        user: {
          vezeteknev: vezeteknev,
          keresztnev: keresztnev,
          email: req.user.user.email,
          id: req.user.user.id,
          jogkor_id: req.user.user.jogkor_id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "50m" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    console.log("token: ");
    console.log(token);
    res.json(token);
  }
};

//@desc Bejelentkezett felhasználó adatainak lekérése
//@route GET /api/users/getUserDetails
//@access private
const felhasznaloLekeres = async (req, res) => {
  const { jogkor_id, email } = req.user.user; // A claims-ból kiolvassuk az ID-t
  res.json({ user: req.user.user });
};

//@desc Felhasználó jogosultságának módosítása
//@route POST /api/users/changeUserPrivilege
//@access private

const jogkor_modositas = async (req, res) => {
  const { jogkor_id } = req.user.user;
  if (jogkor_id != 4)
    return res.status(400).json("Nincs joga megváltoztatni a jogosultságokat!");

  const felhasznalo_id = req.body.id;
  const uj_jogkor = req.body.jogkor;

  if (!felhasznalo_id) res.status(400).json("Az ID megadása kötelező!");
  if (!Number.isInteger(felhasznalo_id))
    return res.status(400).json({ error: "Az ID egy egész szám!" });

  if (!uj_jogkor) res.status(400).json("A jogkör megadása kötelező!");
  if (!Number.isInteger(uj_jogkor) || uj_jogkor < 0 || uj_jogkor > 4)
    return res
      .status(400)
      .json({ error: "A jogkör egy egész szám 1 és 4 között!" });

  const felhasznalo_letezik = await prisma.felhasznalok.findFirst({
    where: {
      felhasznalo_id: felhasznalo_id,
    },
  });

  if (!felhasznalo_letezik)
    return res
      .status(401)
      .json({ err: "Nincs felhasználó a megadott ID-vel!" });
  else if (felhasznalo_letezik.jogkor_id == 4)
    return res.status(401).json("Admin jogát nem lehet megváltoztatni!");

  const update_user = await prisma.felhasznalok.update({
    where: {
      felhasznalo_id: felhasznalo_id,
    },
    data: {
      jogkor_id: uj_jogkor,
    },
  });

  if (update_user) res.status(201).json("A módosítás sikeres!");
  else res.status(500).json("A módosítás sikerestelen!");
};

export {
  registerUser,
  loginUser,
  logout,
  felhasznaloModositas,
  felhasznaloLekeres,
  jogkor_modositas,
};
