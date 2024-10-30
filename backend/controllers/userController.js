import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient()


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = (async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json("All fields are mandatory!");
  }
  
  const userAvailable = await prisma.user.findFirst({
    where:{
        email: email
    }
  })
  
  if (userAvailable) {
    return res.status(400).json("User already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await prisma.user.create({
    data:{
        username,
        email,
        password: hashedPassword,
    }
  })

  if (user) {
    return res.status(201).json({ _id: user.id, email: user.email });
  } else {
    return res.status(400).json("User data is not valid");
  }
  //res.json({ message: "Register the user" });
});



//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = (async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("All fields are mandatory!");
  }
  const user = await prisma.user.findFirst({
    where:{
        email: email
    }
  })
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    

    const cookie =  res.cookie('jwt', accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    console.log(cookie)
    res.status(200).json( 'success' );
  } else {
    res.status(401).json("email or password is not valid");
  }
});

//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = (async (req, res) => {
  //   try {
  //     const cookie = req.cookies['jwt']
      

  //     const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET)

  //     if (!claims) {
  //         return res.status(401).send({
  //             message: 'unauthenticated1'
  //         })
  //     }
      
  //       const user = await prisma.user.findMany()
  //       return res.json(user)
      
  // } catch (e) {
  //     return res.status(401).send({
  //         message: 'Nincs tokened'
  //     })
  // }
  const {id} = req.user.user // A claims-ból kiolvassuk az ID-t
  
  console.log("userid " + id)
  // Ellenőrizzük, hogy az ID 1-e
  if (id === 1) {
    return res.status(403).send({
      message: 'Hozzáférés megtagadva'
    });
  }

  // Ha a felhasználó ID-ja nem 1, lekérdezzük a felhasználókat
  const users = await prisma.user.findMany();
  return res.json(users);

});

const logout =  (req, res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'token törlése'
    })
}

export { registerUser, loginUser, currentUser, logout };