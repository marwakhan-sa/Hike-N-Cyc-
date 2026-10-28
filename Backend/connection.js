import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cycleRoutes from './Routes/cycleRoutes.js';
import customerRoutes from "./Routes/customerRoutes.js";
import guideRoutes from "./Routes/guideRoutes.js";
import rentalRoutes from "./Routes/rentalRoutes.js";
import attendanceRoutes from "./Routes/attendanceRoutes.js";
import cancelBookingRoutes from "./Routes/cancelBookingRoutes.js";
import complaintRoutes from "./Routes/complaintRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/cycles", cycleRoutes);
app.use("/customer", customerRoutes);
app.use("/guide", guideRoutes);
app.use("/rent-cycle", rentalRoutes);
app.use("/mark-attendance", attendanceRoutes);
app.use("/cancel-booking", cancelBookingRoutes);
app.use("/complaint", complaintRoutes);

app.listen(5000,() => {
    console.log("Server is running on port 5000");
})


mongoose.connect("mongodb+srv://marwakhansa1_db_user:12345@cluster0.pz9szue.mongodb.net/",)
.then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("Error connecting to mongodb:",error);
});

export default app;