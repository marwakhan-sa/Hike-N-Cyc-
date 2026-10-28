import express from "express";
import {Router} from "express";
import {cycleController} from "../Controllers/cycleController.js";
import {editCycleController} from "../Controllers/cycleController.js";
import { deleteCycleController } from "../Controllers/cycleController.js";
import { getCyclesController } from "../Controllers/cycleController.js";

const router= express.Router();
router.post("/", cycleController);
router.put("/:id", editCycleController);
router.delete("/:id", deleteCycleController);
router.get("/", getCyclesController);

export default router;