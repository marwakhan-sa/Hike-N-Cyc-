import express from "express";
import {Router} from "express";
import {cycleController} from "../Controllers/cycleController.js";


const router= express.Router();
router.post("/", cycleController);

export default router;