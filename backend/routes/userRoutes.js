import express from 'express'
import { registerUser, loginUser, logout, felhasznaloModositas } from '../controllers/userController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/profilmodosit", validateToken, felhasznaloModositas)


router.post("/logout", logout)

export default router