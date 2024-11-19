import express from 'express'
import { tanuloKifizetesei } from '../controllers/kifizetesController.js'
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router()

router.get("/kifizetesek", validateToken, tanuloKifizetesei)

export default router