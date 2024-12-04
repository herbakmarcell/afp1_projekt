import express from "express";
import {
  oraLetrehozas,
  orarendModositas,
  orarendLekeres,
  oraTorles,
  kovetkezoOra,
} from "../controllers/orarendController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.put("/oraModositas", validateToken, orarendModositas);
router.get("/orarendLekeres", validateToken, orarendLekeres);
router.post("/oraLetrehozas", validateToken, oraLetrehozas);
router.delete("/oraTorles", validateToken, oraTorles);
router.get("/kovetkezoOra", validateToken, kovetkezoOra);
export default router;
