import Attendance from '../models/attendance.js';

export const attendanceController = (req, response) => {
    const { selectevent, participant1, participant2, participant3, totalpresent, notes } = req.body;

    const newAttendance = new Attendance({
        attevent: selectevent,
        attp1: participant1,
        attp2: participant2,
        attp3: participant3,
        atttotal: totalpresent,
        attnotes: notes,
    });

    newAttendance.save()
    .then(() => {
        response.status(201).json({ message: "Attendance saved successfully" });
    })
    .catch((error) => {
        console.error("Error saving attendance:", error);
        response.status(500).json({ message: "Error saving attendance" });
    });
}