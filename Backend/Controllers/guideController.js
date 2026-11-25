import bcrypt from 'bcryptjs';
import Guide from '../models/guide.js';
import { signAccessToken } from "../utils/tokens.js";

export const registerGuide = async (req, response) => {
    const { fullname, email, guidetype, experience, password } = req.body;
    console.log("Guide registration received:", {
        fullname, email, guidetype, experience
    });
    const hashedPassword = await bcrypt.hash(password, 12);
    const newGuide = new Guide({
        gname: fullname,
        gemail: email,
        gtype: guidetype,
        gexperience: experience,
        gpassword: hashedPassword,
    });
    newGuide.save()
    .then(() => {
        response.status(201).json({ message: "Guide registered successfully" });
    })
    .catch((error) => {
        console.error("Error registering guide:", error);
        response.status(500).json({ message: "Error registering guide" });
    });
}
//guide login
export const loginGuide = (req, response) => {
    const { email, password } = req.body;
    console.log("Guide login received:", { email });
    Guide.findOne({ gemail: email })
    .then(async(user) => {
        if (!user || !(await bcrypt.compare(password, user.gpassword))) {
            return response.status(401).json({ message: "Invalid email or password" });
        }
     const accessToken = signAccessToken({
        _id: user._id,
        role: "guide"
      });
       response.set("Cache-Control", "no-store").status(200).json({ message: "Login successful", accessToken });
    })
    .catch((error) => {
        console.error("Error logging in:", error);
        response.status(500).json({ message: "Error logging in" });
    });
}