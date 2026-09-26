import logo from "../assets/logo.png";

function Dashboard() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>

      {/* Top bar with logo */}
      <div
        className="d-flex align-items-center justify-content-between px-4 py-3 mb-4"
        style={{ backgroundColor: "#254631" }}
      >
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Hike N Cyc"
            style={{ height: "50px", marginRight: "12px" }}
          />
          <h4 className="text-white fw-bold mb-0">Hike N Cyc - Admin Dashboard</h4>
        </div>
      </div>

      <div className="container pb-5">

        {/* Quick stats */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h2 className="fw-bold" style={{ color: "#254631" }}>3</h2>
                <p className="card-text mb-0">Cycles in Inventory</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h2 className="fw-bold" style={{ color: "#254631" }}>2</h2>
                <p className="card-text mb-0">Active Bookings</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h2 className="fw-bold" style={{ color: "#254631" }}>2</h2>
                <p className="card-text mb-0">Complaints Logged</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cycles table */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Cycle Inventory</h4>
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ backgroundColor: "#254631" }}>
                  <tr className="text-white">
                    <th>Cycle Name / Model</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Rental Price (Rs./day)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trek Marlin 5</td>
                    <td>Mountain Bike</td>
                    <td>4</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <td>Giant Escape 3</td>
                    <td>Hybrid Bike</td>
                    <td>6</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Cannondale Quick 4</td>
                    <td>Road Bike</td>
                    <td>3</td>
                    <td>1800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bookings table */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Bookings</h4>
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ backgroundColor: "#254631" }}>
                  <tr className="text-white">
                    <th>Customer</th>
                    <th>Cycle / Event</th>
                    <th>Date Booked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hammad</td>
                    <td>Saturday Hike</td>
                    <td>2026-09-20</td>
                  </tr>
                  <tr>
                    <td>Khan</td>
                    <td>Giant Escape 3 (Rental)</td>
                    <td>2026-09-22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Complaints table */}
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Complaints</h4>
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0 align-middle">
                <thead style={{ backgroundColor: "#254631" }}>
                  <tr className="text-white">
                    <th>Customer</th>
                    <th>Subject</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Khan</td>
                    <td>Bike was not available at pickup time</td>
                    <td><span className="badge bg-warning text-dark">Pending</span></td>
                  </tr>
                  <tr>
                    <td>Marva</td>
                    <td>Route was longer than advertised</td>
                    <td><span className="badge" style={{ backgroundColor: "#254631" }}>Resolved</span></td>
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

export default Dashboard;