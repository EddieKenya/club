import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        KWA JOSE <span className="gold-text">LOUNGE</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#events">EVENTS</a></li>
        <li><a href="#reservations">RESERVATIONS</a></li>
        {/* Updated to match other links */}
        <li><a href="#enquiry">ENQUIRY</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;