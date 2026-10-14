import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    selectcycle: z.string().min(1, "Please select a cycle to remove"),
    reasonforremoval: z.enum(["1", "2", "3", "4"], {
      error: "Please select a reason for removal",
    }),
    additionalnotes: z
      .string()
      .trim()
      .max(255, "Notes must be at most 255 characters")
      .optional(),
    quantityavailable: z
      .number({ error: "Quantity is required" })
      .int("Quantity must be a whole number")
      .min(1, "Quantity must be at least 1"),
    confirmremoval: z.literal(true, {
      error: "You must confirm the removal",
    }),
  })
  .refine(
    (data) =>
      data.reasonforremoval !== "4" || (data.additionalnotes ?? "").length >= 5,
    {
      message: "Please explain the reason when choosing Other",
      path: ["additionalnotes"],
    }
  );

function DeleteItem() {
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
          <h1 className="fw-bold">Remove a Cycle</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Cycle Name/Model</label>
            <select className="form-select" id="selectCycle" {...register("selectcycle")}>
              <option value="">Choose one to remove</option>
              <option value="1">Trek Marlin 5 - Mountain Bike</option>
              <option value="2">Giant Escape 3 - Hybrid Bike</option>
              <option value="3">Cannondale Quick 4 - Road Bike</option>
            </select>
            {errors.selectcycle && <span className="text-danger">Please select a cycle to remove</span>}
          </div>

           <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Reason for Removal</label>
            <select className="form-select" id="selectCycle" {...register("reasonforremoval")}>
              <option value="">Choose a reason</option>
              <option value="1">Damaged</option>
              <option value="2">Outdated</option>
              <option value="3">Sold</option>
               <option value="4">Other</option>
            </select>
            {errors.reasonforremoval && <span className="text-danger">Please select a reason for removal</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
            <textarea
              className="form-control"
              id="additionalNotes"
              rows="3"
              placeholder="e.g. Frame cracked during last rental"
              {...register("additionalnotes")}
            ></textarea>
            {errors.additionalnotes && <span className="text-danger">Additional notes are required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Quantity Available</label>
            <input type="number" className="form-control" id="quantity" min="0"
            {...register("quantityavailable")}
            />
            {errors.quantityavailable && <span className="text-danger">Quantity is required</span>}
          </div>

           <div className="mb-4 form-check">
            <input type="checkbox" className="form-check-input" id="confirmRemoval"
            {...register("confirmremoval")}
            />
            {errors.confirmremoval && <span className="text-danger">You must confirm the removal</span>}

            <label htmlFor="confirmRemoval" className="form-check-label">
              I confirm this cycle should be permanently removed from inventory
            </label>
</div>
          <div className="mb-4">
            <button
              type="button"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Delete Cycle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteItem;