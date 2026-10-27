import logo from "../assets/logo.png";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginGuideAxiosFunction } from "../service/api";

const schema = z.object({
 email: z
 .string()
 .trim()
 .pipe(z.email("Enter a valid email")),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be at most 50 characters"),
});

function GuideLogin() {

const {register, handleSubmit, formState: { errors }} = useForm({
  resolver: zodResolver(schema)
});

async function myFormSubmissionFunction(data) {
  console.log("Form submitted!", data);
  return await loginGuideAxiosFunction(data);
} 

  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Hike N Cyc"
            className="mx-auto d-block img-fluid mb-3"
            style={{ height: "80px" }}
          />
          <h1 className="fw-bold">Guide Login</h1>
        </div>

        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
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
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuideLogin;