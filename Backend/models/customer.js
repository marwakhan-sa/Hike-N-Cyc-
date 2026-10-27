import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    custname: {type: String, required: true},
    custemail: {type: String, required: true},
    custphone: {type: String, required: true},
    custpassword: {type: String, required: true},
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;