import React, { useState, useEffect } from 'react';
import './Home.css';

import homeImage from '../assets/home.webp';
import clubDj from '../assets/clubdj.webp';
import entrance from '../assets/entrance.webp';

const Home = () => {
  const images = [homeImage, clubDj, entrance];
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <section id="home" className={`home-hero ${isLoaded ? 'hero-visible' : ''}`}>
      {images.map((img, i) => {
        // Check if this is the entrance image to apply a specific fix
        const isEntrance = img.includes('entrance');
        
        return (
          <div
            key={i}
            className={`hero-bg-layer ${index === i ? 'active' : ''} ${isEntrance ? 'pos-top' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        );
      })}

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