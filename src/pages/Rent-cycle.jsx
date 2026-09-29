function RentCycle() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Rent a Cycle</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Choose a Cycle</label>
            <select className="form-select" id="selectCycle">
              <option value="">-- Select a cycle --</option>
              <option value="1">Trek Marlin 5 - Mountain Bike </option>
              <option value="2">Giant Escape 3 - Hybrid Bike </option>
              <option value="3">Cannondale Quick 4 - Road Bike </option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" />
          </div>

          <div className="mb-4">
            <label htmlFor="rentalDate" className="form-label">Rental Date</label>
            <input type="date" className="form-control" id="rentalDate" />
          </div>

          <div className="mb-4">
            <label htmlFor="days" className="form-label">Number of Days</label>
            <input type="number" className="form-control" id="days" min="1" />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}> Confirm Rental
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RentCycle;