function AssignedEvents() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Assigned Events</h1>
        </div>

        {/* Events assigned to this guide */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Upcoming Events</h4>
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ backgroundColor: "#254631" }}>
                  <tr className="text-white">
                    <th>Event</th>
                    <th>Date</th>
                    <th>Meeting Point</th>
                    <th>Participants</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Saturday Hike</td>
                    <td>2026-10-03</td>
                    <td>Margalla Hills Trailhead</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Sunday Cycling</td>
                    <td>2026-10-04</td>
                    <td>F-8 Markaz</td>
                    <td>9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Participants of a selected event */}
        <div className="col-md-4 mb-4">
          <label htmlFor="selectEvent" className="form-label">View Participants Of</label>
          <select className="form-select" id="selectEvent">
            <option value="">-- Select an event --</option>
            <option value="1">Saturday Hike - 2026-10-03</option>
            <option value="2">Sunday Cycling - 2026-10-04</option>
          </select>
        </div>

        <div className="mb-5">
          <h4 className="fw-bold mb-3">Participants</h4>
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ backgroundColor: "#254631" }}>
                  <tr className="text-white">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Bike Rented</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Khan</td>
                    <td>0300-1234567</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Marwa</td>
                    <td>0311-7654321</td>
                    <td>Giant Escape 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignedEvents;