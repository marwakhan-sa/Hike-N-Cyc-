import Cancellation from '../models/cancellation.js';

export const cancelBookingController = (req, response) => {
    const { selectbooking, reason, additionalnotes } = req.body;

    const newCancellation = new Cancellation({
        cbbooking: selectbooking,
        cbreason: reason,
        cbnotes: additionalnotes,
    });

    newCancellation.save()
    .then(() => {
        response.status(201).json({ message: "Booking cancelled successfully" });
    })
    .catch((error) => {
        console.error("Error cancelling booking:", error);
        response.status(500).json({ message: "Error cancelling booking" });
    });
}