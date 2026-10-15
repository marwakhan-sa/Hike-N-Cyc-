import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  selectevent: z.string().min(1, "Please select an event"),
  participant1: z.boolean(),
  participant2: z.boolean(),
  participant3: z.boolean(),
  totalpresent: z
    .number({ error: "Total present is required" })
    .int("Total must be a whole number")
    .min(0, "Total cannot be negative"),
  notes: z.string().trim().max(255, "Notes must be at most 255 characters"),
});

function MarkAttendance() {
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
          <h1 className="fw-bold">Mark Attendance</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)} >
          <div className="mb-4">
            <label htmlFor="selectEvent" className="form-label">Select Event</label>
            <select className="form-select" id="selectEvent" {...register("selectevent")}>
              <option value="">Select an event</option>
              <option value="1">Saturday Hike - 2026-10-03</option>
              <option value="2">Sunday Cycling - 2026-10-04</option>
            </select>
            {errors.selectevent && <span className="text-danger">{errors.selectevent.message}</span>}
          </div>

          <div className="mb-4">
            <label className="form-label">Participants Present</label>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p1"
                {...register("participant1")}
              />
              {errors.participant1 && <span className="text-danger">{errors.participant1.message}</span>}
              <label htmlFor="p1" className="form-check-label">Khan</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p2"
                {...register("participant2")}
              />
              {errors.participant2 && <span className="text-danger">{errors.participant2.message}</span>}
              <label htmlFor="p2" className="form-check-label">Marwa</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p3"
                {...register("participant3")}
              />
              {errors.participant3 && <span className="text-danger">{errors.participant3.message}</span>}
              <label htmlFor="p3" className="form-check-label">Haider</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="totalPresent" className="form-label">Total Present</label>
            <input type="number" className="form-control" id="totalPresent" min="0"
              {...register("totalpresent", {valueAsNumber: true})}
            />
            {errors.totalpresent && <span className="text-danger">{errors.totalpresent.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="notes" className="form-label">Notes</label>
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              placeholder="e.g. Two participants left early"
              {...register("notes")}
            ></textarea>
            {errors.notes && <span className="text-danger">{errors.notes.message}</span>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Save Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MarkAttendance;