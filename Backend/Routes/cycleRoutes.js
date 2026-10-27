import express from "express";
import {Router} from "express";
import {cycleController} from "../Controllers/cycleController.js";
import {editCycleController} from "../Controllers/cycleController.js";

const router= express.Router();
router.post("/", cycleController);
router.put("/:id", editCycleController);

export default router;