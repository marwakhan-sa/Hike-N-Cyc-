import bcrypt from 'bcryptjs';
import Customer from '../models/customer.js';
import { signAccessToken } from "../utils/tokens.js";

export const registerCustomer = async (req, response) => {
    const { fullname, email, phonenumber, password } = req.body;
    console.log("Customer registration received:", {
        fullname,
        email,
        phonenumber,
    });
    const hashedPassword = await bcrypt.hash(password, 12);
    const newCustomer = new Customer({
        custname: fullname,
        custemail: email,
        custphone: phonenumber,
        custpassword: hashedPassword,
    });
    newCustomer.save()
    .then(() => {
        response.status(201).json({ message: "Customer registered successfully" });
    })
    .catch((error) => {
        console.error("Error registering customer:", error);
        response.status(500).json({ message: "Error registering customer" });
    });
}
//Customer login part
export const loginCustomer = (req, response) => {
    const { email, password } = req.body; //object destructuring hou rahi that extracts multiple values from the req object
    console.log("Customer login received:", { email });

    Customer.findOne({ custemail: email }) //searches the database for a custemail to match the given email.
    .then(async (user) => {
        if (!user || !(await bcrypt.compare(password, user.custpassword))) { 
            return response.status(401).json({ message: "Invalid email or password" });
        }
    const accessToken = signAccessToken({
        _id: user._id,
        role: "customer"
    });
        response.set("Cache-Control", "no-store").status(200).json({ message: "Login successful", accessToken });
    })
    .catch((error) => {
        console.error("Error logging in:", error);
        response.status(500).json({ message: "Error logging in" });
    });
}