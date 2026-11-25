import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({ //structure/ schema fro admin
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//Admin ke name se modal banaya hai that uses the abive adminSchema
const Admin = mongoose.model("Admin", adminSchema, "admin");
export default Admin;