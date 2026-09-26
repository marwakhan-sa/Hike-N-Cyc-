import { useState } from 'react'
import hikeImg from '../assets/hike.jpeg'
import cycleRental from '../assets/cycle-rental.jpeg'
import cyclinglImg from '../assets/cycling.jpeg'
import restImg from '../assets/rest.jpeg'
import cyclesImg from '../assets/cycles.jpeg'
import ourRide from '../assets/our-ride.jpeg'
import aboutUs from '../assets/who-are-we.jpeg'

export default function Home () {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">Hike N Cyc</a>
          <div id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#plans">Our Plans</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home" className="hero-text" style={{ backgroundColor: 'beige' }}>
        <h1>Welcome to Hike N Cyc</h1>
        <p>Ride. Hike. Connect.</p>
        <a href="#plans" className="btn btn-warning">See Our Plans</a>
      </div>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cyclinglImg} alt="About us" />
          </div>

          <div className="carousel-item">
            <img src={cyclesImg} alt="Ride and Grow together" />
          </div>

          <div className="carousel-item">
            <img src={restImg} alt="Our ride" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div id="about" className="container about-us">
        <div className="row align-items-center g-4">
          <div className="col-md-4">
            <img src={aboutUs} className="img-fluid rounded-circle" alt="Who we are" />
          </div>

          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              Hike N Cyc began as a simple idea: get more people in Islamabad
              moving outdoors together. From weekend hikes in the Margalla Hills
              to Sunday morning rides through the city, we handle the planning
              so you can just show up, ride or walk, and enjoy it.
            </p>
          </div>
        </div>
      </div>

      <div id="plans" className="container cards">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <img src={hikeImg} className="card-img-top" alt="Hike" />
              <div className="card-body">
                <h5 className="card-title">Saturday Hike</h5>
                <p className="card-text">Join our one day hike trip in Islamabad. Registration fee is Rs. 400.</p>
                <a href="#" className="btn btn-success">Register</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src={ourRide} className="card-img-top" alt="Cycling" />
              <div className="card-body">
                <h5 className="card-title">Sunday Cycling</h5>
                <p className="card-text">Join our group ride, for example F-8 to Faisal Mosque. Registration fee is Rs. 400.</p>
                <a href="#" className="btn btn-success">Register</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <img src={cycleRental} className="card-img-top" alt="Cycle Rental" />
              <div className="card-body">
                <h5 className="card-title">Cycle Rental</h5>
                <p className="card-text">Don't have a cycle? Rent one for Rs. 1,500 and pick it up on the day of the ride.</p>
                <a href="#" className="btn btn-success">Rent Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="why-us" className="container why-us">
        <h2 className="text-center">Why Choose Us</h2>
        <div className="row g-4 mt-2">
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Handpicked Routes</h5>
                <p className="card-text">Every trail and road is scouted beforehand, so you get the most rewarding views around the Margalla Hills and beyond.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Stay Fit & Active</h5>
                <p className="card-text">Regular hikes and rides help you build stamina, clear your head, and stay in shape without needing a gym.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Safety Comes First</h5>
                <p className="card-text">Every outing follows a planned route with group check-ins and basic first-aid on hand.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Made for Fun</h5>
                <p className="card-text">We keep things relaxed and social, every ride or hike is a chance to make new memories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="trust" className="container trust">
        <h2 className="text-center">Why People Stick Around</h2>

        <div className="row g-4 mt-2">
          <div className="col-md-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Guides Who Know the Ground</h5>
                <p className="card-text">Our leaders have ridden and hiked these trails for years, so you're in safe hands on every outing.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">A Growing Circle of Friends</h5>
                <p className="card-text">Everyone who joins becomes part of the crew. Most people come back for the people as much as the trail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div id="faq" className="container faq">
  <h2 className="text-center">Frequently Asked Questions</h2>

  <div id="faq-list" className="mt-4">
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">How do I sign up for a ride or hike?</h5>
        <p className="card-text">
          Pick the event from the Our Plans section and click Register. You'll get an email with everything you need before the day.
        </p>
      </div>
    </div>

    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Do I need my own bicycle?</h5>
        <p className="card-text">
          Not at all. You can rent one from us for Rs. 1,500 and pick it up on the day of the ride.
        </p>
      </div>
    </div>

    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Are the cycling routes safe for beginners?</h5>
        <p className="card-text">
          Yes. Routes are planned in advance and the group rides together, so beginners are never left behind.
        </p>
      </div>
    </div>

    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">What happens if it rains on event day?</h5>
        <p className="card-text">
          We'll email and post on Instagram if an event is postponed due to weather, usually a day in advance.
        </p>
      </div>
    </div>
  </div>
</div>

      <footer id="contact">
        <h5>Hike N Cyc</h5>
        <p>Instagram: @hikencyc | Islamabad, Pakistan</p>
        <p>&copy; 2026 Hike N Cyc</p>
      </footer>
    </>
  )
}

