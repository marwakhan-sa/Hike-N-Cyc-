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
  phonenumber: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be at most 100 characters"),
  confirmpassword: z
    .string()
    .min(6, "Please confirm your password")
    .max(100, "Password must be at most 100 characters"),
}).refine((data) => data.password === data.confirmpassword, {
  message: "Passwords do not match",
  path: ["confirmpassword"],
});

function CustomerRegister() {
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
          <h1 className="fw-bold">Register yourself</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              {...register("fullname")}
            />
            {errors.fullname && <span className="text-danger">Full name is required</span>}
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
            {errors.email && <span className="text-danger">Email is required</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              {...register("phonenumber")}
            />
            {errors.phonenumber && <span className="text-danger">Phone number is required</span>}
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
            {errors.password && <span className="text-danger">Password is required</span>}
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
            {errors.confirmpassword && <span className="text-danger">Please confirm your password</span>}
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

export default CustomerRegister;