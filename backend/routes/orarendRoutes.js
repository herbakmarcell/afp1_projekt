import express from 'express'
import { oraLetrehozas, orarendModositas, orarendLekeres } from '../controllers/orarendController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/orarendModositas",  validateToken , orarendModositas);
router.get("/orarendLekeres", validateToken, orarendLekeres);
router.post("/oraLetrehozas", validateToken, oraLetrehozas)
export default router