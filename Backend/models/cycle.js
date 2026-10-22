import mongoose from "mongoose";

const cycleSchema = mongoose.Schema({
    cname: {type: String, required: true},
    cyclequantity: {type: Number, required: true},
    rentalprice: {type: Number, required: true},
    condition: {type: String, required: true},
    cycleimage: {type: String, required: true}
});

const Cycle = mongoose.model("Cycle", cycleSchema);
export default Cycle;