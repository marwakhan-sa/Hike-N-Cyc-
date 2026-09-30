function ViewMyBookings() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">My Bookings</h1>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead style={{ backgroundColor: "#254631" }}>
                <tr className="text-white">
                  <th>Cycle</th>
                  <th>Rental Date</th>
                  <th>Days</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Giant Escape 3 - Hybrid Bike</td>
                  <td>2026-10-04</td>
                  <td>2</td>
                  <td><span className="badge" style={{ backgroundColor: "#254631" }}>Confirmed</span></td>
                </tr>
                <tr>
                  <td>Trek Marlin 5 - Mountain Bike</td>
                  <td>2026-10-11</td>
                  <td>1</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMyBookings;