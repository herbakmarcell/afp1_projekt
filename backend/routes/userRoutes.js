import express from "express";
import { registerUser, loginUser, logout, felhasznaloLekeres, felhasznaloModositas } from '../controllers/userController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/profilmodosit", validateToken, felhasznaloModositas)

router.post("/logout", logout);

router.get("/getUserDetails", felhasznaloLekeres);

export default router;
