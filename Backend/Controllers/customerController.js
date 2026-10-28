import Customer from '../models/customer.js';

export const registerCustomer = (req, response) => {
    const { fullname, email, phonenumber, password } = req.body;

    console.log("Customer registration received:", {
        fullname,
        email,
        phonenumber,
    });

    const newCustomer = new Customer({
        custname: fullname,
        custemail: email,
        custphone: phonenumber,
        custpassword: password,
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

export const loginCustomer = (req, response) => {
    const { email, password } = req.body;

    console.log("Customer login received:", { email });
    
    Customer.findOne({ custemail: email })
    .then((user) => {
        if (!user || user.custpassword !== password) {
            return response.status(401).json({ message: "Invalid email or password" });
        }
        response.status(200).json({ message: "Login successful" });
    })
    .catch((error) => {
        console.error("Error logging in:", error);
        response.status(500).json({ message: "Error logging in" });
    });
}