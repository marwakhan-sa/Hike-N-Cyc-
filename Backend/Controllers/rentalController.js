import Rental from '../models/rental.js';

export const rentalController = (req, response) => {
    const { cycle, fullname, phonenumber, rentaldate, days } = req.body;

    const newRental = new Rental({
        rcycle: cycle,
        rname: fullname,
        rphone: phonenumber,
        rdate: rentaldate,
        rdays: days,
    });

    newRental.save()
    .then(() => {
        response.status(201).json({ message: "Rental confirmed successfully" });
    })
    .catch((error) => {
        console.error("Error saving rental:", error);
        response.status(500).json({ message: "Error saving rental" });
    });
}