import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema({
    rcycle: {type: String, required: true},
    rname: {type: String, required: true},
    rphone: {type: String, required: true},
    rdate: {type: Date, required: true},
    rdays: {type: Number, required: true},
});

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental;