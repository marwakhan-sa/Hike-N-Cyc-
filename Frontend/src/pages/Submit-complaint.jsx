import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullname: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),
 email: z
 .string()
 .trim()
 .pipe(z.email("Enter a valid email")),
  relatedevent: z.enum(["hike", "cycling", "rental", "other"], {
    error: "Please select a related event or booking",
  }),
  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be at most 100 characters"),
  description: z
    .string()
    .trim()
    .min(20, "Please describe the issue in at least 20 characters")
    .max(1000, "Description must be at most 1000 characters"),
});

function SubmitComplaint() {
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});

function myFormSubmissionFunction() {
  console.log("Form submitted!");
}

  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Submit a Complaint</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" {...register("fullname")} />
            {errors.fullname && <span className="text-danger">Full name is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" {...register("email")} />
            {errors.email && <span className="text-danger">Email is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="relatedEvent" className="form-label">Related Event / Booking</label>
            <select className="form-select" id="relatedEvent" {...register("relatedevent")}>
              <option value="">-- Select --</option>
              <option value="hike">Saturday Hike</option>
              <option value="cycling">Sunday Cycling</option>
              <option value="rental">Cycle Rental</option>
              <option value="other">Other</option>
            </select>
            {errors.relatedevent && <span className="text-danger">Please select a related event or booking</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Brief summary of the issue"
             {...register("subject")} />
            {errors.subject && <span className="text-danger">Subject is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              placeholder="Describe what happened"
              {...register("description")}
            ></textarea>
            {errors.description && <span className="text-danger">Description is required</span>}  
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint;