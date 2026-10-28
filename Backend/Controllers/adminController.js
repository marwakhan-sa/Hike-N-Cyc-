import Admin from "../models/admin.js";

export const adminController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Admin login received:", { email });
    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      return res.status(401).send("Invalid email or password");
    }

    return res.status(200).send("Login successful");
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).send("Login error");
  }
};