import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient()


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = (async (req, res) => {


  const { vezeteknev, keresztnev, email, jelszo, bankszamla, jogosultsag } = req.body;
  if (!vezeteknev || !keresztnev || !email || !jelszo || !bankszamla || !jogosultsag) {
    return res.status(400).json("Nincsen minden mező kitöltve.");
  }
  

  const userAvailable = await prisma.felhasznalok.findFirst({
    where:{
        email: email
    }
  })
  
  if (userAvailable) {
    return res.status(400).json("A felhasználó már regisztrálva van.");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(jelszo, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await prisma.felhasznalok.create({
    data:{
      vezeteknev, 
      keresztnev, 
      email, 
      jelszo : hashedPassword, 
      bankszamla,
      jogkor_id: parseInt(jogosultsag)
    }
  })


  console.log({user})


  if (user) {
    return res.status(201).json({ sikeres: "Success" });
  } else {
    return res.status(400).json("Nem sikerült létrehozni a felhasználót.");
  }
  //res.json({ message: "Register the user" });
});



//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = (async (req, res) => {
  
  const { email, jelszo } = req.body;
  console.log(email, jelszo)
  if (!email || !jelszo) {
    return res.status(400).json("All fields are mandatory!");
  }
  const user = await prisma.felhasznalok.findFirst({
    where:{
        email: email
    }
  })
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(jelszo, user.jelszo))) {
    const token = jwt.sign(
      {
        user: {
          vezeteknev: user.vezeteknev,
          keresztnev: user.keresztnev,
          email: user.email,
          id: user.felhasznalo_id,
          jogkor_id: user.jogkor_id
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "50m" }
    );
    

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    
    res.json( { token } )
  } else {
    res.status(401).json("email or password is not valid");
  }
});

const logout =  (req, res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'token törlése'
    })
}



export { registerUser, loginUser, logout };