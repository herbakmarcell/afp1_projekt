import express from 'express'
import { oktatokLekerese } from '../controllers/oktatokController.js'
import validateToken from '../middleware/validateTokenHandler.js'

const router = express.Router()

router.get("/oktatolista", validateToken, oktatokLekerese)

export default router