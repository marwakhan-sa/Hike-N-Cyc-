function GuideRegister() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Join as a Guide</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>

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
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="guideType" className="form-label">Guiding Speciality</label>
            <select className="form-select" id="guideType">
              <option value="">-- Select speciality --</option>
              <option value="hiking">Hiking</option>
              <option value="cycling">Cycling</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="form-label">Years of Experience</label>
            <input
              type="number"
              className="form-control"
              id="experience"
              min="0"
              placeholder="e.g. 3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
            />
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