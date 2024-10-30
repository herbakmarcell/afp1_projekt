import express from 'express'
import users from './routes/userRoutes.js'
import orarend from './routes/orarendRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express();

const port = 5000;

app.use(express.json());

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5000', 'http://localhost:8080', 'http://localhost:4200']
}))


app.use("/api/users", users);
app.use("/api/orarend", orarend)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});