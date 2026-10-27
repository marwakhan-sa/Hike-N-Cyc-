import express from "express";
import { attendanceController } from "../Controllers/attendanceController.js";

const router = express.Router();
router.post("/", attendanceController);

export default router;