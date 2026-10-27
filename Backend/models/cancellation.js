import mongoose from "mongoose";

const cancellationSchema = new mongoose.Schema({
    cbbooking: {type: String, required: true},
    cbreason: {type: String, required: true},
    cbnotes: {type: String, default: ""},
});

const Cancellation = mongoose.model("Cancellation", cancellationSchema);
export default Cancellation;