import express from "express";
import studentController from "../controllers/studentController.js";
import { body } from "express-validator";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUser,
} from "../controllers/verifyToken.js";

let router = express.Router();

router.get("/all", verifyTokenAndAdmin, studentController.getAllStudent);
router.post("/", verifyTokenAndAdmin, studentController.createStudent);
router.post("/:id", verifyTokenAndAdmin, studentController.updateStudentById);
router.get("/:id", verifyTokenAndAdmin, studentController.getStudentById);
router.delete("/:id",verifyTokenAndAdmin, studentController.deleteStudentById);

export default router;
