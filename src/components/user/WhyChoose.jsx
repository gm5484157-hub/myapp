import React from "react";
import "./WhyChoose.css";
import { FaLock, FaUserCheck, FaHeart, FaUsers } from "react-icons/fa";

const WhyChoose = () => {
  const data = [
    {
      icon: <FaLock />,
      title: "Privacy First",
      desc: "Your data is encrypted and protected. Control who sees your profile and contact details.",
    },
    {
      icon: <FaUserCheck />,
      title: "Verified Profiles",
      desc: "Every profile is manually verified by our team for authenticity and safety.",
    },
    {
      icon: <FaHeart />,
      title: "Expert Matchmaking",
      desc: "AI-powered matching combined with personalized assistance from relationship experts.",
    },
    {
      icon: <FaUsers />,
      title: "Success Stories",
      desc: "Join 10L+ families who found their perfect match through our platform.",
    },
  ];

  return (
    <section className="why">
      <div className="why-inner">

        {/* Heading */}
        <div className="why-header">
          <span className="why-badge">Why SoulMatch</span>
          <h2>Why Choose SoulMatch?</h2>
          <p className="why-subtitle">
            Your trusted partner in finding the perfect life companion
          </p>
        </div>

        {/* Cards */}
        <div className="why-cards">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-icon-wrap">
                <div className="card-icon">{item.icon}</div>
                <div className="card-icon-glow"></div>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-border-accent"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;