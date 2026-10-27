import Guide from '../models/guide.js';

export const registerGuide = (req, response) => {
    const { fullname, email, phonenumber, guidetype, experience, password } = req.body;

    console.log("Guide registration received:", {
        fullname, email, phonenumber, guidetype, experience
    });

    const newGuide = new Guide({
        gname: fullname,
        gemail: email,
        gphone: phonenumber,
        gtype: guidetype,
        gexperience: experience,
        gpassword: password,
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

export const loginGuide = (req, response) => {
    const { email, password } = req.body;

    console.log("Guide login received:");

    Guide.findOne({ gemail: email })
    .then((user) => {
        if (!user || user.gpassword !== password) {
            return response.status(401).json({ message: "Invalid email or password" });
        }
        response.status(200).json({ message: "Login successful" });
    })
    .catch((error) => {
        console.error("Error logging in:", error);
        response.status(500).json({ message: "Error logging in" });
    });
}