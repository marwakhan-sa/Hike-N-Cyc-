import mongoose from "mongoose";

const cycleSchema = mongoose.Schema({
    cid: {type: String, required: true, unique: true},
    cname: {type: String, required: true},
    ctype: {type: String, required: true},
    cquantity: {type: Number, required: true},
    rprice: {type: Number, required: true},
    ccondition: {type: String},
});

const Cycle = mongoose.model("Cycle", cycleSchema);
export default Cycle;