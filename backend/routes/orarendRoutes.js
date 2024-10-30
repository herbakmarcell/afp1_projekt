import express from 'express'
import { orarendModositas } from '../controllers/orarendController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/orarendModositas",  validateToken , orarendModositas);

export default router