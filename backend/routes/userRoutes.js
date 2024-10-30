import express from 'express'
import { registerUser, loginUser, currentUser, logout } from '../controllers/userController.js';
import validateToken from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current",  validateToken ,currentUser);

router.post("/logout", logout)

export default router