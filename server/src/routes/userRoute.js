import express from "express";
import userController from "../controllers/userController";
import authController from "../controllers/authController";
import { body } from "express-validator";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUser,
} from "../controllers/verifyToken";

let router = express.Router();

router.get("/all", verifyToken, userController.getAllUser);

router.post(
  "/",
  body("username")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("must be at least 8 chars long"),
  authController.register
);
router.get(
  "/",
  body("username")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
    verifyTokenAndUser,
  userController.getUserByUsername
);
router.get(
  "/login",
  body("username")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("must be at least 8 chars long"),
  authController.login
);
router.get("/:id", verifyTokenAndUser, userController.getUserById);
router.delete("/:id",verifyTokenAndUser, userController.deleteUserById);

export default router;
