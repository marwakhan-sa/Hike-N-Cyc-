import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerGuideAxiosFunction } from "../service/api.js";

const schema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name must be at most 100 characters"),
   email: z
   .string()
   .trim()
   .pipe(z.email("Enter a valid email")),
    phonenumber: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
    guidetype: z.enum(["hiking", "cycling", "both"], {
      error: "Please select a guiding speciality",
    }),
    experience: z
      .number({ error: "Years of experience is required" })
      .int("Must be a whole number")
      .min(0, "Experience cannot be negative")
      .max(60, "Enter a realistic number of years"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be at most 100 characters"),
    confirmpassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

function GuideRegister() {

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: zodResolver(schema)
} );

async function myFormSubmissionFunction(data) {
  console.log("Form submitted!", data);
  return await registerGuideAxiosFunction(data);
}

  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Join as a Guide</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)} >
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              {...register("fullname")}
            />
            {errors.fullname && <span className="text-danger">{errors.fullname.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              {...register("phonenumber", {valueAsNumber:true})}
            />
            {errors.phonenumber && <span className="text-danger">{errors.phonenumber.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="guideType" className="form-label">Guiding Speciality</label>
            <select className="form-select" id="guideType" {...register("guidetype")}>
              <option value="">Select speciality</option>
              <option value="hiking">Hiking</option>
              <option value="cycling">Cycling</option>
              <option value="both">Both</option>
            </select>
            {errors.guidetype && <span className="text-danger">{errors.guidetype.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="form-label">Years of Experience</label>
            <input
              type="number"
              className="form-control"
              id="experience"
              min="0"
              placeholder="e.g. 2"
              {...register("experience", { valueAsNumber: true })} />
            {errors.experience && <span className="text-danger">{errors.experience.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              {...register("password")}
            />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              {...register("confirmpassword")}
            />
            {errors.confirmpassword && <span className="text-danger">{errors.confirmpassword.message}</span>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuideRegister;