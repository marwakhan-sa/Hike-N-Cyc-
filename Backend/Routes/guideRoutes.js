import express from "express";
import { registerGuide, loginGuide } from "../Controllers/guideController.js";

const router = express.Router();
router.post("/register", registerGuide);
router.post("/login", loginGuide);

export default router;