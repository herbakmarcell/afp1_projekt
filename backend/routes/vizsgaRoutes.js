import express from 'express'
import { elerhetoVizsgak, vizsgaJelentkezes, vizsgaLejelentkezes } from '../controllers/vizsgaController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.get("/vizsgak", validateToken, elerhetoVizsgak)
router.post("/jelentkezes", validateToken, vizsgaJelentkezes)
router.delete("/lejelentkezes", validateToken, vizsgaLejelentkezes)

export default router;