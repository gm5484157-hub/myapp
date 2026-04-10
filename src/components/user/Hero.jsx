import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
    <div className="joppppp">
  <div className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-badge">Trusted Matrimony Platform</p>
          <h1>
            Find Your Perfect <br />
            <span>Life Partner</span>
          </h1>

          <p className="tagline">
            Trusted by 10L+ Families • Verified Profiles • Safe & Secure
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Register Free</button>
            <button className="btn-outline">Browse Profiles</button>
          </div>

          {/* Profiles */}
          <div className="profiles">
            <div className="avatars">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="user" />
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="user" />
            </div>
            <p>
              <b>5,000+</b> profiles matched this week
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552"
              alt="wedding couple"
            />
          </div>

          {/* Floating Card */}
          <div className="match-card">
            <div className="match-card-icon">❤</div>
            <div className="match-card-content">
              <h3>10,000+</h3>
              <p>Matches Made</p>
            </div>
          </div>
        </div>
      </div>
<div className="filter-bottom">
  <select className="filter-select">
    <option>Religion</option>
    <option>Muslim</option>
    <option>Christian</option>
  </select>

  <select className="filter-select">
    <option>Mother Tongue</option>
    <option>English</option>
    <option>Urdu</option>
  </select>

  <select className="filter-select">
    <option>Age Range</option>
    <option>18-25</option>
    <option>26-30</option>
  </select>

  <select className="filter-select">
    <option>Location</option>
    <option>Lahore</option>
    <option>Karachi</option>
  </select>

  
  <button className="search-btn">Search</button>
</div>
    </div>
    </>
  );
};

export default Hero;