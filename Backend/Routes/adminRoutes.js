import express from "express";
import { adminController } from "../Controllers/adminController.js";

const router = express.Router();
router.post("/login", adminController);

export default router;
