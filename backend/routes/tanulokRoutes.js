import express from 'express'
import { oktatoTanuloi, tanulokLekerese } from '../controllers/tanulokController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/oktatoTanuloi", validateToken, oktatoTanuloi);
router.get("tanulokLekeres", validateToken, tanulokLekerese);

export default router