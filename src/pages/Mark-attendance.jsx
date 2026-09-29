function MarkAttendance() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Mark Attendance</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="selectEvent" className="form-label">Select Event</label>
            <select className="form-select" id="selectEvent">
              <option value="">Select an event</option>
              <option value="1">Saturday Hike - 2026-10-03</option>
              <option value="2">Sunday Cycling - 2026-10-04</option>
            </select>
          </div>

          <hr className="mb-4" />

          <div className="mb-4">
            <label className="form-label">Participants Present</label>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p1" />
              <label htmlFor="p1" className="form-check-label">Ali Raza</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p2" />
              <label htmlFor="p2" className="form-check-label">Sara Khan</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="p3" />
              <label htmlFor="p3" className="form-check-label">Hamza Ahmed</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="totalPresent" className="form-label">Total Present</label>
            <input type="number" className="form-control" id="totalPresent" min="0" />
          </div>

          <div className="mb-4">
            <label htmlFor="notes" className="form-label">Notes</label>
            <textarea
              className="form-control"
              id="notes"
              rows="3"
              placeholder="e.g. Two participants left early"
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Save Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MarkAttendance;