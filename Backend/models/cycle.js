import mongoose from "mongoose";

const cycleSchema = mongoose.Schema({
    cname: {type: String, required: true},
    ctype: {type: String, required: true},
    cquantity: {type: Number, required: true},
    rprice: {type: Number, required: true},
    ccondition: {type: String, required: true},
});

const Cycle = mongoose.model("Cycle", cycleSchema);
export default Cycle;