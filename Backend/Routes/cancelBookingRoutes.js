import express from "express";
import { cancelBookingController } from "../Controllers/cancelBookingController.js";

const router = express.Router();
router.post("/", cancelBookingController);

export default router;