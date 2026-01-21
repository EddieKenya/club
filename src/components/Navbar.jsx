import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to flip the state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        KWA JOSE <span className="gold-text">LOUNGE</span>
      </div>

      {/* The Hamburger / Options Icon */}
      <div className="nav-hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* The Menu Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
        <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
        <li><a href="#events" onClick={toggleMenu}>EVENTS</a></li>
        <li><a href="#reservations" onClick={toggleMenu}>RESERVATIONS</a></li>
        <li><a href="#enquiry" onClick={toggleMenu}>ENQUIRY</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;