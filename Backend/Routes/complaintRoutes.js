import express from "express";
import { complaintController } from "../Controllers/complaintController.js";

const router = express.Router();
router.post("/", complaintController);

export default router;