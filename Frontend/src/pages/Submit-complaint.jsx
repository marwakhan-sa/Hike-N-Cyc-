function SubmitComplaint() {
  return (
    <div style={{ backgroundColor: "#faf4e6", minHeight: "100vh" }}>
      <div className="container pt-5 pb-5 col-md-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Submit a Complaint</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-4">
            <label htmlFor="relatedEvent" className="form-label">Related Event / Booking</label>
            <select className="form-select" id="relatedEvent">
              <option value="">-- Select --</option>
              <option value="hike">Saturday Hike</option>
              <option value="cycling">Sunday Cycling</option>
              <option value="rental">Cycle Rental</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Brief summary of the issue" />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              placeholder="Describe what happened"
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="form-control text-white border-0"
              style={{ backgroundColor: "#254631" }}
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint;