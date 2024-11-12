import express from 'express'
import { osszesFelhasznalo } from '../controllers/adminController.js'
import validateToken from '../middleware/validateTokenHandler.js'

const router = express.Router()

router.get('/felhasznalok', validateToken, osszesFelhasznalo)

export default router