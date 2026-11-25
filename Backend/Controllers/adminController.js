import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import { signAccessToken } from "../utils/tokens.js";

export const adminController = async (req, res) => {  
  try {
    const { email, password } = req.body; 
    console.log("Admin login received:", { email });
    const admin = await Admin.findOne({ email });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).send("Invalid email or password");
    }
     const accessToken = signAccessToken({
      _id: admin._id,
      role: "admin"
    });
         return res
        .set("Cache-Control", "no-store")
        .status(200)
        .json({ message: "Login successful", accessToken });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).send("Login error");
  }
};