import express from 'express'
import { oktatoTanuloi } from '../controllers/tanulokController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/oktatoTanuloi",  validateToken , oktatoTanuloi);

export default router