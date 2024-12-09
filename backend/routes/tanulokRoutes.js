import express from 'express'
import { oktatoTanuloi, tanulokLekerese, tanuloElorehaladasa, tanuloSajatHaladasa } from '../controllers/tanulokController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();


router.get("/oktatoTanuloi", validateToken, oktatoTanuloi);
router.get("/tanulokLekerese", validateToken, tanulokLekerese);
router.post("/elorehaladas", validateToken, tanuloElorehaladasa);
router.get("/sajatElorehaladas", validateToken, tanuloSajatHaladasa);

export default router