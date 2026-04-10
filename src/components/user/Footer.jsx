import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Column 1 — Brand */}
        <div className="footer-col footer-col--brand">
          <h2 className="footer-logo">
            <span className="logo-soul">Soul</span>
            <span className="logo-match">Match</span>
          </h2>
          <p className="footer-desc">
            Finding perfect life partners since 2010. Trusted by millions of families across the country.
          </p>

          {/* Social Icons */}
          <div className="social-row">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="Youtube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Browse Profiles</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Premium Plans</a></li>
            <li><a href="#">Success Stories</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Tips</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Report Profile</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 SoulMatch. All rights reserved. Made with{" "}
          <FaHeart className="heart-icon" /> in India
        </p>
      </div>

    </footer>
  );
};

export default Footer;