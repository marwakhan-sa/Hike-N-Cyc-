import logo from "../assets/logo.png";

function CustomerLogin() {
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
          <h1 className="fw-bold">Customer Login</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
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

export default CustomerLogin;