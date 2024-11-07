import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  felhasznaloLekeres,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logout);

router.get("/getUserDetails", felhasznaloLekeres);
export default router;
