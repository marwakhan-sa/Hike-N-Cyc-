import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    compname: {type: String, required: true},
    compemail: {type: String, required: true},
    compevent: {type: String, required: true},
    compsubject: {type: String, required: true},
    compdescription: {type: String, required: true},
});

const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;