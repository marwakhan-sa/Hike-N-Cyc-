import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  cycle: z.string().min(1, "Please select a cycle"),
  fullname: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),
  phonenumber: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  rentaldate: z
    .string()
    .min(1, "Rental date is required")
    .refine((value) => {
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Rental date cannot be in the past"),
  days: z
    .number({ error: "Number of days is required" })
    .int("Days must be a whole number")
    .min(1, "Minimum rental is 1 day")
    .max(30, "Maximum rental is 30 days"),
});

function RentCycle() {
const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: zodResolver(schema)
});

function myFormSubmissionFunction() {   
  console.log("Form submitted!");
}

  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Rent a Cycle</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)} >
          <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Choose a Cycle</label>
            <select className="form-select" id="selectCycle" {...register("cycle")}>
              <option value="">-- Select a cycle --</option>
              <option value="1">Trek Marlin 5 - Mountain Bike </option>
              <option value="2">Giant Escape 3 - Hybrid Bike </option>
              <option value="3">Cannondale Quick 4 - Road Bike </option>
            </select>
            {errors.cycle && <span className="text-danger">Please select a cycle</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" {...register("fullname")} />
            {errors.fullname && <span className="text-danger">Full name is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" {...register("phonenumber")} />
            {errors.phonenumber && <span className="text-danger">Phone number is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="rentalDate" className="form-label">Rental Date</label>
            <input type="date" className="form-control" id="rentalDate" {...register("rentaldate")}
             />
            {errors.rentaldate && <span className="text-danger">Rental date is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="days" className="form-label">Number of Days</label>
            <input type="number" className="form-control" id="days" min="1" {...register("days")} />
            {errors.days && <span className="text-danger">Number of days is required</span>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}> Confirm Rental
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RentCycle;