import express from "express";
import { getCyclesController } from "../Controllers/cycleController.js";

const router= express.Router();
router.get("/", getCyclesController);

export default router;