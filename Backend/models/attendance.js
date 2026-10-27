import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    attevent: {type: String, required: true},
    attp1: {type: Boolean, default: false},
    attp2: {type: Boolean, default: false},
    attp3: {type: Boolean, default: false},
    atttotal: {type: Number, required: true},
    attnotes: {type: String, default: ""},
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;