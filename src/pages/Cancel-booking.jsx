function CancelBooking() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Cancel a Booking</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="selectBooking" className="form-label">Select Booking</label>
            <select className="form-select" id="selectBooking">
              <option value="">Choose a booking to cancel</option>
              <option value="1">Giant Escape 3 - 2026-10-04</option>
              <option value="2">Trek Marlin 5 - 2026-10-11</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="form-label">Reason for Cancellation</label>
            <select className="form-select" id="reason">
              <option value="">Select a reason</option>
              <option value="plans">Change of Plans</option>
              <option value="weather">Weather Concerns</option>
              <option value="health">Health Reasons</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="notes" className="form-label">Additional Notes</label>
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              placeholder="Optional comments"
            ></textarea>
          </div>

          <div className="mb-4 form-check">
            <input type="checkbox" className="form-check-input" id="confirmCancel" />
            <label htmlFor="confirmCancel" className="form-check-label">
              I confirm I want to cancel this booking
            </label>
          </div>

          <div className="mb-4">
            <button
              type="button"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Cancel Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CancelBooking;