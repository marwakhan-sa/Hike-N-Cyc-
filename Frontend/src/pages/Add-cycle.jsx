import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCycleAxiosFunction } from "../service/api";

const schema = z.object({
  cyclename: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  cycletype: z.enum(["mountain", "road", "hybrid", "kids"], {
    error: "Select a cycle type",
  }),
  cyclequantity: z
    .number({ error: "Quantity is required" })
    .int("Quantity must be a whole number")
    .min(0, "Quantity cannot be negative"),
  rentalprice: z
    .number({ error: "Rental price is required" })
    .positive("Price must be greater than 0"),
  condition: z
    .string()
    .trim()
    .max(255, "Condition must be at most 255 characters")
    .optional(),
  cycleimage: z
    .any()
    .refine((files) => files?.length > 0, "Cycle image is required")
    .refine(
      (files) => files?.[0]?.type.startsWith("image/"),
      "File must be an image"
    )
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024,
      "Image must be under 5MB"
    ),
});

function AddCycle() {
const {register, handleSubmit, formState: { errors }} = useForm({
  resolver: zodResolver(schema)
});

async function myFormSubmissionFunction(data) {
console.log("Form submitted!", data);
await addCycleAxiosFunction(data);
}

  return (
     <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
   <div className="container pt-5 col-md-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Add a new cycle</h1>
      </div>

      <form onSubmit={handleSubmit(myFormSubmissionFunction)}>

        <div className="mb-4">
          <label htmlFor="cycleName" className="form-label">Cycle Name / Model</label>
          <input
            type="text"
            className="form-control"
            id="cycleName"
            placeholder="e.g. Trek Marlin 5"
            {...register("cyclename")}
          />
          {errors.cyclename && <span className="text-danger">{errors.cyclename.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="cycleType" className="form-label">Cycle Type</label>
          <select className="form-select" id="cycleType" {...register("cycletype")}>
            <option value="">Select type</option>
            <option value="mountain">Mountain Bike</option>
            <option value="road">Road Bike</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="kids">Kids Bike</option>
          </select>
          {errors.cycletype && <span className="text-danger">{errors.cycletype.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">Quantity Available</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            min="0"
            placeholder="e.g. 5"
            {...register("cyclequantity", {valueAsNumber: true})}
          />
          {errors.cyclequantity && <span className="text-danger">{errors.cyclequantity.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="rentalPrice" className="form-label">Rental Price per Day (Rs.)</label>
          <input
            type="number"
            className="form-control"
            id="rentalPrice"
            min="0"
            placeholder="e.g. 1500"
            {...register("rentalprice", {valueAsNumber: true})}
          />
          {errors.rentalprice && <span className="text-danger">{errors.rentalprice.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="form-label">Condition / Notes</label>
          <textarea
            className="form-control"
            id="condition"
            rows="3"
            placeholder="e.g. New, well maintained, minor scratches, etc."
            {...register("condition")}
          ></textarea>
          {errors.condition && <span className="text-danger">{errors.condition.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="cycleImage" className="form-label">Cycle Image</label>
          <input type="file" className="form-control" id="cycleImage" 
          {...register("cycleimage")}
          />
          {errors.cycleimage && <span className="text-danger">{errors.cycleimage.message}</span>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="form-control text-white border-0"
            style={{ backgroundColor: "#254631" }}
          >
            Add Cycle
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddCycle;