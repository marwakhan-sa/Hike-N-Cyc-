import express from "express";
import { adminController } from "../Controllers/adminController.js";

const router = express.Router(); //new router object bana rahay, that will group the related routes together.
router.post("/login", adminController); //jab POST request iss path pe bheji jayegi tou iskay controller kou call kiya jaega

export default router;
