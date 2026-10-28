import Cycle from '../models/cycle.js';
import mongoose from 'mongoose';

export const cycleController = (req, response) => {
    const{ cyclename, cycletype, cyclequantity, rentalprice, condition } = req.body;

  console.log("Add cycle request received:", {
  cyclename,
  cycletype,
  cyclequantity,
  rentalprice,
});
    const newCycle = new Cycle({
    cname: cyclename,
    ctype: cycletype,   
    cquantity: cyclequantity,
    rprice: rentalprice,
    ccondition: condition,
});

 newCycle.save()
.then(() => {
    console.log("Cycle added successfully"); 
    response.status(201).json({ message: "Cycle added successfully" });
})
.catch((error) => {
    console.error("Error adding cycle:", error);
    response.status(500).json({ message: "Error adding cycle" });
});
}

//Edit cycle controller
export const editCycleController = (req, response) => {
    const { id } = req.params;
    const { cyclename, cycletype, cyclequantity, rentalprice, condition } = req.body;

    console.log("Edit cycle request received. MongoDB ID:", id);

    Cycle.findByIdAndUpdate(
        id,
        {
            cname: cyclename,
            ctype: cycletype,
            cquantity: cyclequantity,
            rprice: rentalprice,
            ccondition: condition,
        },
        { new: true, runValidators: true }
    )
    .then((updated) => {
        if (!updated) {
            return response.status(404).json({ message: "Cycle not found" });
        }
        console.log("Cycle updated successfully. MongoDB ID:", updated._id);
        response.status(200).json({ message: "Cycle updated successfully" });
    })
    .catch((error) => {
        console.error("Error updating cycle:", error);
        response.status(500).json({ message: "Error updating cycle" });
    });
}

//controller that return cycles
export const getCycleController = async (req, response) => {
  try {
    const cycles = await Cycle.find().select("_id");
    response.status(200).json(cycles);
  } catch (error) {
    console.error("Error fetching cycles:", error);
    response.status(500).json({ message: "Error fetching cycles" });
  }
};

//delete controller
export const deleteCycleController = (req, response) => {
    const { id } = req.params;

    console.log("Delete cycle request received. MongoDB ID:", id);

    Cycle.findByIdAndDelete(id)
        .then((deleted) => {
            if (!deleted) {
                return response.status(404).json({ message: "Cycle not found" });
            }
            console.log("Cycle deleted successfully. MongoDB ID:", deleted._id);
            response.status(200).json({ message: "Cycle deleted successfully" });
        })
        .catch((error) => {
            console.error("Error deleting cycle:", error);
            response.status(500).json({ message: "Error deleting cycle" });
        });
};