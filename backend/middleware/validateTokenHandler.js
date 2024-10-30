import jwt from 'jsonwebtoken'


// Middleware a JWT token ellenőrzésére
const validateToken = (req, res, next) => {
  const cookie = req.cookies['jwt'];
  
  if (!cookie) {
    return res.status(401).send({
      message: 'Nincs tokened'
    });
  }

  jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET, (err, claims) => {
    if (err) {
      return res.status(401).send({
        message: 'unauthenticated'
      });
    }
    console.log(claims)

    // A claims-t elérhetővé tesszük a következő middleware vagy route handler számára
    req.user = claims;
    console.log(claims.user)
    next(); // Továbbítás a következő middleware-hez vagy route handlerhez
  });
};

export default validateToken