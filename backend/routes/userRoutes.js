import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  felhasznaloLekeres,
  felhasznaloModositas,
  jogkor_modositas,
  deleteUser,
  activateUser,
} from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/profilmodosit", validateToken, felhasznaloModositas);

router.post("/logout", logout);

router.get("/getUserDetails", validateToken, felhasznaloLekeres);

router.post("/changeUserPrivileges", validateToken, jogkor_modositas);

router.delete("/deleteUser", validateToken, deleteUser);

router.put("/activateUser", validateToken, activateUser);
export default router;
