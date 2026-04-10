import React from "react";
import "./FeaturedProfiles.css";
import { FaMapMarkerAlt, FaCrown } from "react-icons/fa";

const profiles = [
  {
    name: "Priya Sharma",
    age: 26,
    job: "Software Engineer",
    location: "Mumbai, Maharashtra",
    religion: "Hindu",
    premium: true,
    img: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Rahul Patel",
    age: 29,
    job: "Business Owner",
    location: "Ahmedabad, Gujarat",
    religion: "Hindu",
    premium: true,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Anjali Reddy",
    age: 24,
    job: "Doctor",
    location: "Hyderabad, Telangana",
    religion: "Hindu",
    premium: false,
    img: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Arjun Singh",
    age: 31,
    job: "Civil Engineer",
    location: "Delhi NCR",
    religion: "Sikh",
    premium: true,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
   {
    name: "Priya Sharma",
    age: 26,
    job: "Software Engineer",
    location: "Mumbai, Maharashtra",
    religion: "Hindu",
    premium: true,
    img: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Rahul Patel",
    age: 29,
    job: "Business Owner",
    location: "Ahmedabad, Gujarat",
    religion: "Hindu",
    premium: true,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Anjali Reddy",
    age: 24,
    job: "Doctor",
    location: "Hyderabad, Telangana",
    religion: "Hindu",
    premium: false,
    img: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Arjun Singh",
    age: 31,
    job: "Civil Engineer",
    location: "Delhi NCR",
    religion: "Sikh",
    premium: true,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const FeaturedProfiles = () => {
  return (
    <section className="featured">
      <div className="featured-inner">

        {/* Header */}
        <div className="featured-header">
          <div className="featured-header-text">
            <span className="featured-badge">Our Members</span>
            <h2>Featured Profiles</h2>
            <p className="featured-subtitle">
              Meet verified members looking for their life partner
            </p>
          </div>

          <button className="view-all">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div className="profile-grid">
          {profiles.map((p, i) => (
            <div className="profile-card" key={i}>

              {/* Image */}
              <div className="img-box">
                <img src={p.img} alt={p.name} />
                <div className="img-overlay"></div>

                {p.premium && (
                  <span className="premium-badge">
                    <FaCrown /> Premium
                  </span>
                )}

                {/* Quick action buttons on hover */}
                <div className="img-actions">
                  <button className="quick-btn" title="Shortlist">♥</button>
                  <button className="quick-btn" title="Send Interest">✉</button>
                </div>
              </div>

              {/* Content */}
              <div className="profile-info">
                <h3 className="profile-name">{p.name}</h3>
                <p className="profile-detail">{p.age} years, {p.job}</p>

                <p className="profile-location">
                  <FaMapMarkerAlt /> {p.location}
                </p>

                <span className="religion-tag">{p.religion}</span>

                <button className="view-btn">View Profile</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProfiles;