import express from 'express'
import { oktatokLekerese, oktatoValasztas } from '../controllers/oktatokController.js'
import validateToken from '../middleware/validateTokenHandler.js'

const router = express.Router()

router.get("/oktatolista", validateToken, oktatokLekerese)
router.post("/kivalasztas", validateToken, oktatoValasztas)

export default router
