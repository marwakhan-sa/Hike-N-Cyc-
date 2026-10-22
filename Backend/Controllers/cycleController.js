import Cycle from '../models/cycle.js';

export const cycleController = (req, response) => {
    // console.log("Post request received for /add-cycle");
    // console.log("Request body:", req.body);
    // response.send("Add cycle endpoint reached.");
    const{ cyclename, cycletype, cyclequantity, rentalprice, condition } = req.body;

    const newCycle = new Cycle({
    cname: cyclename,
    ctype: cycletype,   
    cquantity: cyclequantity,
    rprice: rentalprice,
    ccondition: condition,
    // cimage: cycleimage
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
