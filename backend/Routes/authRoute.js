import express from "express";
import { signupController } from "../Controllers/authController.js";

const router = express.Router();

router.post("/signup", signupController);

export default router;