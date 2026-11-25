import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cycleRoutes from './Routes/cycleRoutes.js';
import customerRoutes from "./Routes/customerRoutes.js";
import guideRoutes from "./Routes/guideRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import protectedRoutes from "./Routes/protected.js";

if (!process.env.ACCESS_TOKEN_SECRET) {
  console.error("Missing environment variable: ACCESS_TOKEN_SECRET");
  process.exit(1);
}

const app = express(); //creates an express appliction/server
app.use(cors()); //Enables CORS so frontend can send requests to this backend
app.use(express.json());//Allows the server to read JSON data sent from the frontend
app.use("/cycles", cycleRoutes); //connects route to the path
app.use("/customer", customerRoutes);
app.use("/guide", guideRoutes);
app.use("/admin", adminRoutes);
app.use("/", protectedRoutes);

app.listen(5000,() => {
    console.log("Server is running on port 5000");
})

//connects app to MongoDB
mongoose.connect("mongodb+srv://marwakhansa1_db_user:12345@cluster0.pz9szue.mongodb.net/",)
.then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("Error connecting to mongodb:",error);
});

export default app;