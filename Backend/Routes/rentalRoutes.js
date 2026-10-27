import express from "express";
import { rentalController } from "../Controllers/rentalController.js";

const router = express.Router();
router.post("/", rentalController);

export default router;