import express from 'express'
import { oktatoTanuloi, tanulokLekerese, tanuloElorehaladasa } from '../controllers/tanulokController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/oktatoTanuloi", validateToken, oktatoTanuloi);
router.get("/tanulokLekerese", validateToken, tanulokLekerese);
router.post("/elorehaladas", validateToken, tanuloElorehaladasa);

export default router