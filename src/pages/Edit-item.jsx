function EditItem() {
  return (
     <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
    <div className="container pt-5 col-md-4" >
      <div className="text-center mb-4">
        <h1 className="fw-bold">Update cycle details</h1>
      </div>

      <form>
        <div className="mb-4">
          <label htmlFor="selectCycle" className="form-label">Select Cycle</label>
          <select className="form-select" id="selectCycle">
            <option value="">-- Choose a cycle to edit --</option>
            <option value="1">Trek Marlin 5 - Mountain Bike</option>
            <option value="2">Giant Escape 3 - Hybrid Bike</option>
            <option value="3">Cannondale Quick 4 - Road Bike</option>
          </select>
        </div>

        <hr className="mb-4" />

        <div className="mb-4">
          <label htmlFor="cycleName" className="form-label">Cycle Name / Model</label>
          <input type="text" className="form-control" id="cycleName" />
        </div>

        <div className="mb-4">
          <label htmlFor="cycleType" className="form-label">Cycle Type</label>
          <select className="form-select" id="cycleType">
            <option value="">-- Select type --</option>
            <option value="mountain">Mountain Bike</option>
            <option value="road">Road Bike</option>
            <option value="hybrid">Hybrid Bike</option>
            <option value="kids">Kids Bike</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">Quantity Available</label>
          <input type="number" className="form-control" id="quantity" min="0" />
        </div>

        <div className="mb-4">
          <label htmlFor="rentalPrice" className="form-label">Rental Price per Day (Rs.)</label>
          <input type="number" className="form-control" id="rentalPrice" min="0" />
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="form-label">Condition / Notes</label>
          <textarea className="form-control" id="condition" rows="3"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="cycleImage" className="form-label">Replace Cycle Image</label>
          <input type="file" className="form-control" id="cycleImage" />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="form-control text-white border-0"
            style={{ backgroundColor: "#254631" }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditItem;