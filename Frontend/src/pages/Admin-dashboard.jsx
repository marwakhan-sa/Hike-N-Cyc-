import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function AdminDashboard() {
  return (
    <div className="d-flex" style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>

      {/* Left sidebar menu */}
      <div
        className="d-flex flex-column p-3"
        style={{ backgroundColor: "#254631", width: "260px", minHeight: "100vh" }}
      >
        <div className="d-flex align-items-center mb-4">
          <img
            src={logo}
            alt="Hike N Cyc"
            style={{ height: "45px", marginRight: "10px" }}
          />
          <h5 className="text-white fw-bold mb-0">Hike N Cyc</h5>
        </div>

        <ul className="nav flex-column flex-grow-1">
          <li className="nav-item mb-1">
            <Link
              to="/admin-dashboard"
              className="nav-link text-white rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              Dashboard
            </Link>
          </li>

          {/* Admin components */}
          <p className="text-white-50 small mt-3 mb-1">ADMIN</p>
          <li className="nav-item">
            <Link to="/add-item" className="nav-link text-white">Add Item</Link>
          </li>
          <li className="nav-item">
            <Link to="/edit-item" className="nav-link text-white">Edit Item</Link>
          </li>
          <li className="nav-item">
            <Link to="/delete-item" className="nav-link text-white">Delete Item</Link>
          </li>

          {/* Guide components */}
          <p className="text-white-50 small mt-3 mb-1">GUIDE</p>
          <li className="nav-item">
            <Link to="/assigned-events" className="nav-link text-white">Assigned Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/mark-attendance" className="nav-link text-white">Mark Attendance</Link>
          </li>

          {/* Customer components */}
          <p className="text-white-50 small mt-3 mb-1">CUSTOMER</p>
          <li className="nav-item">
            <Link to="/rent-cycle" className="nav-link text-white">Rent a Cycle</Link>
          </li>
          <li className="nav-item">
            <Link to="/view-my-bookings" className="nav-link text-white">View My Bookings</Link>
          </li>
          <li className="nav-item">
            <Link to="/cancel-booking" className="nav-link text-white">Cancel Booking</Link>
          </li>
          <li className="nav-item">
            <Link to="/submit-complaint" className="nav-link text-white">Submit Complaint</Link>
          </li>
        </ul>

        <Link to="/" className="btn btn-outline-light btn-sm mt-3">
          Logout
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-grow-1">
        <div className="container py-4 pb-5">

          <h3 className="fw-bold mb-4" style={{ color: "#254631" }}>
            Admin Dashboard
          </h3>

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
    </div>
  );
}

export default AdminDashboard;