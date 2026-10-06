function AddItem() {
  return (
     <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
   <div className="container pt-5 col-md-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Add a new cycle</h1>
      </div>

      <form>
        <div className="mb-4">
          <label htmlFor="cycleName" className="form-label">Cycle Name / Model</label>
          <input
            type="text"
            className="form-control"
            id="cycleName"
            placeholder="e.g. Trek Marlin 5"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cycleType" className="form-label">Cycle Type</label>
          <select className="form-select" id="cycleType">
            <option value="">Select type</option>
            <option value="mountain">Mountain Bike</option>
            <option value="road">Road Bike</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="kids">Kids Bike</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">Quantity Available</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            min="0"
            placeholder="e.g. 5"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rentalPrice" className="form-label">Rental Price per Day (Rs.)</label>
          <input
            type="number"
            className="form-control"
            id="rentalPrice"
            min="0"
            placeholder="e.g. 1500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="form-label">Condition / Notes</label>
          <textarea
            className="form-control"
            id="condition"
            rows="3"
            placeholder="e.g. New, well maintained, minor scratches, etc."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="cycleImage" className="form-label">Cycle Image</label>
          <input type="file" className="form-control" id="cycleImage" />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="form-control text-white border-0"
            style={{ backgroundColor: "#254631" }}
          >
            Add Cycle
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddItem;