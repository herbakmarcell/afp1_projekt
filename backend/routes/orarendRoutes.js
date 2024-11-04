import express from 'express'
import { orarendLekeres, orarendModositas } from '../controllers/orarendController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/orarendModositas",  validateToken , orarendModositas);
router.get("/orarendLekeres", validateToken, orarendLekeres);
export default router