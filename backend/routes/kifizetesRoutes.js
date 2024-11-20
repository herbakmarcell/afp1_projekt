import express from 'express'
import { tanuloKifizetesei, kifizetesHozzaadas } from '../controllers/kifizetesController.js'
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router()

router.get("/kifizetesek", validateToken, tanuloKifizetesei)
router.post("/hozzaadas", validateToken, kifizetesHozzaadas)

export default router
