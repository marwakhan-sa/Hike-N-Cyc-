import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { getCycles, getRentals, getComplaints, getAttendance } from "../service/api"

function AdminDashboard() {
  const [cycles, setCycles] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [attendance, setAttendance] = useState([]);

  //fetches data from the backend when the page opens
  useEffect(() => {
    getCycles()
    .then((res) => setCycles(Array.isArray(res.data) ? res.data : []))
    .catch((error) => console.error("Error fetching cycles:", error));

  getRentals()
    .then((res) => setRentals(Array.isArray(res.data) ? res.data : []))
    .catch((error) => console.error("Error fetching rentals:", error));

  getComplaints()
    .then((res) => setComplaints(Array.isArray(res.data) ? res.data : []))
    .catch((error) => console.error("Error fetching complaints:", error));

  getAttendance()
    .then((res) => setAttendance(Array.isArray(res.data) ? res.data : []))
    .catch((error) => console.error("Error fetching attendance:", error));
  }, []);

  //total number of cycles = sum of all quantities
  const totalCycles = cycles.reduce((sum, c) => sum + Number(c.cquantity), 0);

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
            <Link to="/add-cycle" className="nav-link text-white">Add Cycle</Link>
          </li>
          <li className="nav-item">
            <Link to="/edit-cycle" className="nav-link text-white">Edit Cycle</Link>
          </li>
          <li className="nav-item">
            <Link to="/delete-cycle" className="nav-link text-white">Delete Cycle</Link>
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
                  <h2 className="fw-bold" style={{ color: "#254631" }}>{totalCycles}</h2>
                  <p className="card-text mb-0">Cycles in Inventory</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="fw-bold" style={{ color: "#254631" }}>{rentals.length}</h2>
                  <p className="card-text mb-0">Active Bookings</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="fw-bold" style={{ color: "#254631" }}>{complaints.length}</h2>
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
                    {cycles.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-muted">No cycles yet</td>
                      </tr>
                    ) : (
                      cycles.map((c) => (
                        <tr key={c._id}>
                          <td>{c.cname}</td>
                          <td>{c.ctype}</td>
                          <td>{c.cquantity}</td>
                          <td>{c.rprice}</td>
                        </tr>
                      ))
                    )}
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
                    {rentals.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted">No bookings yet</td>
                      </tr>
                    ) : (
                      rentals.map((r) => (
                        <tr key={r._id}>
                          <td>{r.rname}</td>
                          <td>{r.rcycle}</td>
                          <td>{new Date(r.rdate).toLocaleDateString()}</td>
                        </tr>
                      ))
                    )}
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
                    {complaints.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted">No complaints yet</td>
                      </tr>
                    ) : (
                      complaints.map((c) => (
                        <tr key={c._id}>
                          <td>{c.compname}</td>
                          <td>{c.compsubject}</td>
                          <td>
                            {c.compstatus === "Resolved" ? (
                              <span className="badge" style={{ backgroundColor: "#254631" }}>Resolved</span>
                            ) : (
                              <span className="badge bg-warning text-dark">Pending</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Attendance table */}
          <div className="mb-5">
            <h4 className="fw-bold mb-3">Attendance</h4>
            <div className="card border-0 shadow-sm">
              <div className="table-responsive">
                <table className="table table-hover mb-0 align-middle">
                  <thead style={{ backgroundColor: "#254631" }}>
                    <tr className="text-white">
                      <th>Event</th>
                      <th>Participant 1</th>
                      <th>Participant 2</th>
                      <th>Participant 3</th>
                      <th>Total Present</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center text-muted">No attendance recorded yet</td>
                      </tr>
                    ) : (
                      attendance.map((a) => (
                        <tr key={a._id}>
                          <td>{a.attevent}</td>
                          <td>{a.attp1 ? "Present" : "Absent"}</td>
                          <td>{a.attp2 ? "Present" : "Absent"}</td>
                          <td>{a.attp3 ? "Present" : "Absent"}</td>
                          <td>{a.atttotal}</td>
                          <td>{a.attnotes}</td>
                        </tr>
                      ))
                    )}
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