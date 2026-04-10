import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-soul">Soul</span>
          <span className="logo-match">Match</span>
        </div>

        <ul className="menu">
          <li>
            <a href="#" className="menu-link">Browse Profiles</a>
          </li>
          <li>
            <a href="#" className="menu-link menu-link--accent">Premium</a>
          </li>
          <li>
            <a href="#" className="menu-link">For Agents</a>
          </li>
        </ul>

        <div className="buttons">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register Free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;