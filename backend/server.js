import express from 'express'
import users from './routes/userRoutes.js'
import orarend from './routes/orarendRoutes.js'
import tanulok from './routes/tanulokRoutes.js'
import kifizetesek from "./routes/kifizetesRoutes.js"
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express();

const port = 5000;

app.use(express.json());

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:4200']
}))


app.use("/api/users", users);
app.use("/api/orarend", orarend)
app.use("/api/tanulok", tanulok)
app.use("/api/kifizetes", kifizetesek)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});