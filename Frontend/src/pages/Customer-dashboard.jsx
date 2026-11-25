import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCycles } from "../service/api.js";
import logo from "../assets/logo.png";

export default function CustomerDashboard() {
  const [cycles, setCycles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCycles()
      .then((res) => setCycles(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching cycles:", err));
  }, []);

  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#254631" }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="Hike N Cyc" style={{ height: "40px" }} />
            <span>Hike N Cyc </span>
          </Link>
          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-outline-light btn-sm">
              Home
            </Link>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-warning btn-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Customer Dashboard</h1>
          <p className="text-muted">
            Rent a cycle, manage your bookings, or submit feedback from one place.
          </p>
        </div>

        {/* 3 Core Customer Action Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title fw-bold">Rent a Cycle</h4>
                  <p className="card-text text-muted">
                    Browse available bicycles and reserve one for your upcoming ride.
                  </p>
                </div>
                <Link
                  to="/rent-cycle"
                  className="btn text-white mt-3"
                  style={{ backgroundColor: "#254631" }}
                >
                  Rent Cycle
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title fw-bold">Cancel Booking</h4>
                  <p className="card-text text-muted">
                    Need to change plans? Cancel an existing cycle rental booking.
                  </p>
                </div>
                <Link
                  to="/cancel-booking"
                  className="btn btn-danger mt-3"
                >
                  Cancel Booking
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title fw-bold">Submit Complaint</h4>
                  <p className="card-text text-muted">
                    Report an issue with a cycle, trail, or booking to our team.
                  </p>
                </div>
                <Link
                  to="/submit-complaint"
                  className="btn btn-warning mt-3"
                >
                  Submit Complaint
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Live Available Cycles Preview */}
        <h3 className="fw-bold mb-3">Available Cycles</h3>
        <div className="row g-4">
          {cycles.length === 0 ? (
            <p className="text-muted">No cycles available right now.</p>
          ) : (
            cycles.map((cycle) => (
              <div className="col-md-4" key={cycle._id || cycle.cid}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{cycle.cname}</h5>
                    <p className="card-text mb-3">
                      <strong>Type:</strong> {cycle.ctype} <br />
                      <strong>Rent:</strong> Rs. {cycle.rprice} / day <br />
                      <strong>Available:</strong> {cycle.cquantity}
                    </p>
                    <Link
                      to="/rent-cycle"
                      className="btn btn-sm text-white"
                      style={{ backgroundColor: "#254631" }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}