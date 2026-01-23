import React from 'react';
import './Home.css';
import homeImage from '../assets/home.webp'; // updated to local image

const Home = () => {
  return (
    <section 
      id="home" 
      className="home-hero" 
      style={{ backgroundImage: `url(${homeImage})` }} // local image
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
