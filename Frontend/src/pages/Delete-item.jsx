function DeleteItem() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Remove a Cycle</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Cycle Name/Model</label>
            <select className="form-select" id="selectCycle">
              <option value="">Choose one to remove</option>
              <option value="1">Trek Marlin 5 - Mountain Bike</option>
              <option value="2">Giant Escape 3 - Hybrid Bike</option>
              <option value="3">Cannondale Quick 4 - Road Bike</option>
            </select>
          </div>

           <div className="mb-4">
            <label htmlFor="selectCycle" className="form-label">Reason for Removal</label>
            <select className="form-select" id="selectCycle">
              <option value="">Choose a reason</option>
              <option value="1">Damaged</option>
              <option value="2">Outdated</option>
              <option value="3">Sold</option>
               <option value="4">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
            <textarea
              className="form-control"
              id="additionalNotes"
              rows="3"
              placeholder="e.g. Frame cracked during last rental"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Quantity Available</label>
            <input type="number" className="form-control" id="quantity" min="0" />
          </div>

           <div className="mb-4 form-check">
            <input type="checkbox" className="form-check-input" id="confirmRemoval" />
            <label htmlFor="confirmRemoval" className="form-check-label">
              I confirm this cycle should be permanently removed from inventory
            </label>
</div>
          <div className="mb-4">
            <button
              type="button"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Delete Cycle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteItem;