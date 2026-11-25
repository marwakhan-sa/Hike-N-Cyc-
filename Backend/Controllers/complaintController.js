import Complaint from '../models/complaint.js';

export const complaintController = (req, response) => {
    const { fullname, email, relatedevent, subject, description } = req.body;

    console.log("Complaint submitted:", {
    fullname,
    email,
    relatedevent,
    subject,
    description,
  });
    const newComplaint = new Complaint({
        compname: fullname,
        compemail: email,
        compevent: relatedevent,
        compsubject: subject,
        compdescription: description,
    });

    newComplaint.save()
    .then(() => {
        console.log("Complaint submitted successfully.");
        response.status(201).json({ message: "Complaint submitted successfully" });
    })
    .catch((error) => {
        console.error("Error submitting complaint:", error);
        response.status(500).json({ message: "Error submitting complaint" });
    });
}

//Get complaints
export const getComplaintsController = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Error fetching complaints" });
  }
};