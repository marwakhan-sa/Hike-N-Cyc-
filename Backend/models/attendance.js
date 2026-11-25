import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    attevent: {type: String, required: true},
    attp1: {type: Boolean, default: false},
    attp2: {type: Boolean, default: false},
    attp3: {type: Boolean, default: false},
    atttotal: {type: Number, required: true},
    attnotes: {type: String, default: ""},
});

export const getAttendanceController = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ message: "Error fetching attendance" });
  }
};

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;