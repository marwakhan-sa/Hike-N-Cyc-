import express from "express";
import { authenticate, authorize } from "../middleware/auth.js";

import {cycleController,editCycleController,deleteCycleController,} from "../Controllers/cycleController.js";
import {rentalController, getRentalsController,} from "../Controllers/rentalController.js";
import { cancelBookingController } from "../Controllers/cancelBookingController.js";
import {complaintController,getComplaintsController,} from "../Controllers/complaintController.js";
import {attendanceController,getAttendanceController,} from "../Controllers/attendanceController.js";

const router = express.Router();

// Cycle management (Admin only)
router.post("/cycles", authenticate, authorize("admin"), cycleController);
router.put("/cycles/:id", authenticate, authorize("admin"), editCycleController);
router.delete("/cycles/:id", authenticate, authorize("admin"), deleteCycleController);

// Rentals
router.get("/rent-cycle", authenticate, authorize("admin"), getRentalsController);
router.post("/rent-cycle", authenticate, authorize("customer"), rentalController);

// Cancel Booking
router.post("/cancel-booking", authenticate, authorize("customer"), cancelBookingController);

// Complaints
router.get("/submit-complaint", authenticate, authorize("admin"), getComplaintsController);
router.post("/submit-complaint", authenticate, complaintController);

// Attendance
router.get("/mark-attendance", authenticate, authorize("admin"), getAttendanceController);
router.post("/mark-attendance", authenticate, authorize("guide"), attendanceController);

export default router;