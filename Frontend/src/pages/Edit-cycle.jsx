import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  selectcycle: z.string().min(1, "Please select a cycle to edit"),
  cyclename: z
    .string()
    .trim()
    .min(2, "Cycle name must be at least 2 characters")
    .max(100, "Cycle name must be at most 100 characters"),
  cycletype: z.enum(["mountain", "road", "hybrid", "kids"], {
    error: "Please select a cycle type",
  }),
  quantityavailable: z
    .number({ error: "Quantity is required" })
    .int("Quantity must be a whole number")
    .min(0, "Quantity must be at least 0"),
  rentalprice: z
    .number({ error: "Rental price is required" })
    .positive("Rental price must be greater than 0"),
  condition: z
    .string()
    .trim()
    .max(255, "Condition / Notes must be at most 255 characters")
     .min(1, "Condition / Notes is required"),
});

function EditCycle() {
const {register, handleSubmit, formState: { errors }} = useForm({
  resolver: zodResolver(schema)
});

function myFormSubmissionFunction() { 
  console.log("Form submitted!");
}

  return (
     <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
    <div className="container pt-5 col-md-4" >
      <div className="text-center mb-4">
        <h1 className="fw-bold">Update cycle details</h1>
      </div>

      <form onSubmit={handleSubmit(myFormSubmissionFunction)} >
        <div className="mb-4">
          <label htmlFor="selectCycle" className="form-label">Select Cycle</label>
          <select className="form-select" id="selectCycle" {...register("selectcycle")}>
            <option value="">-- Choose a cycle to edit --</option>
            <option value="1">Trek Marlin 5 - Mountain Bike</option>
            <option value="2">Giant Escape 3 - Hybrid Bike</option>
            <option value="3">Cannondale Quick 4 - Road Bike</option>
          </select>
          {errors.selectcycle && <span className="text-danger">{errors.selectcycle.message}</span>}
        </div>

        <hr className="mb-4" />

        <div className="mb-4">
          <label htmlFor="cycleName" className="form-label">Cycle Name / Model</label>
          <input type="text" className="form-control" id="cycleName"
          {...register("cyclename")}
          />
          {errors.cyclename && <span className="text-danger">{errors.cyclename.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="cycleType" className="form-label">Cycle Type</label>
          <select className="form-select" id="cycleType" {...register("cycletype")}>
            <option value="">-- Select type --</option>
            <option value="mountain">Mountain Bike</option>
            <option value="road">Road Bike</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="kids">Kids Bike</option>
          </select>
          {errors.cycletype && <span className="text-danger">{errors.cycletype.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">Quantity Available</label>
          <input type="number" className="form-control" id="quantity" min="0"
          {...register("quantityavailable", {valueAsNumber: true})}
          />
          {errors.quantityavailable && <span className="text-danger">{errors.quantityavailable.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="rentalPrice" className="form-label">Rental Price per Day (Rs.)</label>
          <input type="number" className="form-control" id="rentalPrice" min="0"
          {...register("rentalprice", {valueAsNumber: true})}
          />
          {errors.rentalprice && <span className="text-danger">{errors.rentalprice.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="form-label">Condition / Notes</label>
          <textarea className="form-control" id="condition" rows="3"
          {...register("condition")}
          ></textarea>
          {errors.condition && <span className="text-danger">{errors.condition.message}</span>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="form-control text-white border-0"
            style={{ backgroundColor: "#254631" }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditCycle;