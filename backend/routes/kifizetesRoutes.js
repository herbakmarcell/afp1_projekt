import express from 'express'
import { tanuloKifizetesei, kifizetesVegrehajtasa } from '../controllers/kifizetesController.js'
import { tanuloKifizetesei, kifizetesHozzaadas } from '../controllers/kifizetesController.js'
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router()

router.get("/kifizetesek", validateToken, tanuloKifizetesei)
router.put("/vegrehajtas", validateToken, kifizetesVegrehajtasa)
router.post("/hozzaadas", validateToken, kifizetesHozzaadas)

export default router
