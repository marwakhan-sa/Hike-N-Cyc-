import Cycle from '../models/cycle.js';
import mongoose from 'mongoose';

export const cycleController = (req, response) => {
    const{ cycleid, cyclename, cycletype, cyclequantity, rentalprice, condition } = req.body;
  console.log("Add cycle request received:", {
  cycleid,
  cyclename,
  cycletype,
  cyclequantity,
  rentalprice,
  condition,
});
    const newCycle = new Cycle({
    cid: cycleid,
    cname: cyclename,
    ctype: cycletype,   
    cquantity: cyclequantity,
    rprice: rentalprice,
    ccondition: condition,
});
 newCycle.save()
.then(() => {
    response.status(201).json({ message: "Cycle added successfully" });
})
.catch((error) => {
    console.error("Error adding cycle:", error);
    response.status(500).json({ message: "Error adding cycle" });
});
}

//Get cycles
export const getCyclesController = async (req, res) => {
  try {
    const cycles = await Cycle.find();
    res.json(cycles);
  } catch (error) {
    console.error("Error fetching cycles:", error);
    res.status(500).json({ message: "Error fetching cycles" });
  }
};
//Edit cycle controller
export const editCycleController = (req, response) => {
    const { id } = req.params;
    const { cyclename, cycletype, cyclequantity, rentalprice, condition } = req.body;
    console.log("Edit cycle request received:", {
        cycleid: id,
        cyclename,
        cycletype,
        cyclequantity,
        rentalprice,
        condition,
    });
     console.log("Edit request received for:", id);
    console.log("Request body:", req.body);
    Cycle.findOneAndUpdate({ cid: id }, {
        cname: cyclename,
        ctype: cycletype,
        cquantity: cyclequantity,
        rprice: rentalprice,
        ccondition: condition,
    })
    .then(() => {
    response.status(200).json({ message: "Cycle updated successfully" });
})
    .catch((error) => {
        console.error("Error updating cycle:", error);
        response.status(500).json({ message: "Error updating cycle" });
    });
}

//delete controller
export const deleteCycleController = (req, response) => {
    const { id } = req.params;
 console.log("Delete cycle request received:", { cycleid: id });
 console.log("Delete request received for:", id);

    Cycle.findOneAndDelete({ cid: id })
    .then(() => {
         console.log("Cycle deleted successfully:", id);
        response.status(200).json({ message: "Cycle deleted successfully" });
    })
    .catch((error) => {
        console.error("Error deleting cycle:", error);
        response.status(500).json({ message: "Error deleting cycle" });
    });
}