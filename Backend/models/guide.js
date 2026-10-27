import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
    gname: {type: String, required: true},
    gemail: {type: String, required: true},
    gtype: {type: String, required: true},
    gexperience: {type: Number, required: true},
    gpassword: {type: String, required: true},
});

const Guide = mongoose.model("Guide", guideSchema);
export default Guide;