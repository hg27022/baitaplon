import authController from "../controllers/authController";
import { verifyToken } from "../controllers/verifyToken";
import express from "express";

let router = express.Router();

router.post("/register", authController.register);
router.post("/refresh", authController.requestRefreshToken);
router.post("/login", authController.login);
router.post("/logout", verifyToken, authController.logOut);

export default router;