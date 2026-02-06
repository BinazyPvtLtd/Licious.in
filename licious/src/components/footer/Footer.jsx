import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo">
            <span>FM</span>
          </div>
          <h2>Fresh Meats</h2>
          <small>Since 1995</small>
          <p>
            Your trusted destination for premium quality fresh meats. Farm
            fresh, always hygienic, delivered with care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>Chicken</li>
            <li>Mutton & Lamb</li>
            <li>Fresh Fish</li>
            <li>Seafood</li>
            <li>Marinated Meats</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>
                123 Market Street, Main Road, City – 500001
              </span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@freshmeats.com</span>
            </li>
            <li>
              <FaClock />
              <span>7:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 Fresh Meats. All rights reserved. Made with ❤️ for meat lovers.
      </div>
    </footer>
  );
};

export default Footer;
