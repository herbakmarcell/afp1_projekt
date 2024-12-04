import express from "express";
import { tanuloKifizetesei, kifizetesVegrehajtasa, kifizetesHozzaadas, adottTanuloKifizetese } from "../controllers/kifizetesController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.get("/kifizetesek", validateToken, tanuloKifizetesei);
router.put("/vegrehajtas", validateToken, kifizetesVegrehajtasa);
router.post("/hozzaadas", validateToken, kifizetesHozzaadas);
router.post("/tanulokifizetesei", validateToken, adottTanuloKifizetese);

export default router;
