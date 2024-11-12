import express from 'express'
import { elerhetoVizsgak } from '../controllers/vizsgaController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.get("/vizsgak", validateToken, elerhetoVizsgak)

export default router;