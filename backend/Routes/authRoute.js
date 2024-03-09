import express from "express";
import {
  signupController,
  singinController,
} from "../Controllers/authController.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/signin", singinController);

export default router;
