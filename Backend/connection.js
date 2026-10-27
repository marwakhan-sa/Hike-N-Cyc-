import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cycleRoutes from './Routes/cycleRoutes.js';
import customerRoutes from "./Routes/customerRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/add-cycle", cycleRoutes);
app.use("/customer", customerRoutes);

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