import Rental from '../models/rental.js';

export const rentalController = (req, response) => {
    const { cycle, fullname, phonenumber, rentaldate, days } = req.body;

    console.log("Cycle rental received:", {
        cycle,
        fullname,
        phonenumber,
        rentaldate,
        days,
    });

    const newRental = new Rental({
        rcycle: cycle,
        rname: fullname,
        rphone: phonenumber,
        rdate: rentaldate,
        rdays: days,
    });

    newRental.save()
    .then(() => {
        console.log("Cycle rented successfully.");
        response.status(201).json({ message: "Rental confirmed successfully" });
    })
    .catch((error) => {
        console.error("Error saving rental:", error);
        response.status(500).json({ message: "Error saving rental" });
    });
}
//Get rentals
export const getRentalsController = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (error) {
    console.error("Error fetching rentals:", error);
    res.status(500).json({ message: "Error fetching rentals" });
  }
};