import React from 'react';
import './Home.css';

const Home = () => {
  // Use the specific background image requested
  const backgroundImageUrl = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1uXu3haAEsqj9ZEzBQwLrQIWrxT8h4ur1jB1KWc7w3WjyT_m18ojm04PEwGQ2LmxvGIcuRRn6HAL2kRfjuVG81rM8Q0ZqeR9T2QOslvkNEi3GuCl-jeIEnuVzhkZhMqtBYAUrUezsjAnh=s1360-w1360-h1020-rw";

  return (
    <section 
      id="home" 
      className="home-hero" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="home-overlay"></div>
      
      <div className="home-content">
        <h1 className="hero-title">
          DANCE UNTIL <br/> 
          <span className="outline">SUNRISE</span>
        </h1>
        <p className="hero-subtitle">THE MOST EXCLUSIVE LOUNGE EXPERIENCE IN JUJA.</p>
        <div className="hero-actions">
          <a href="#reservations" className="main-button">BOOK A TABLE</a>
        </div>
      </div>
    </section>
  );
};

export default Home;