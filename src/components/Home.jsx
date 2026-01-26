import React, { useState, useEffect } from 'react';
import './Home.css';

// Import all three assets
import homeImage from '../assets/home.webp';
import clubDj from '../assets/clubdj.webp';
import entrance from '../assets/entrance.webp';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const images = [homeImage, clubDj, entrance];

  useEffect(() => {
    // Reveal the hero section on mount
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);

    // Shuffle background every 5 seconds
    const shuffleTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(shuffleTimer);
    };
  }, [images.length]);

  return (
    <section 
      id="home" 
      className={`home-hero ${isLoaded ? 'hero-visible' : ''}`} 
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="home-overlay"></div>
      
      <div className="home-content">
        <h1 className={`hero-title ${isLoaded ? 'animate-title' : ''}`}>
          DANCE UNTIL <br/> 
          <span className="outline">SUNRISE</span>
        </h1>
        <p className={`hero-subtitle ${isLoaded ? 'animate-subtitle' : ''}`}>
          THE MOST EXCLUSIVE LOUNGE EXPERIENCE IN JUJA.
        </p>
        <div className={`hero-actions ${isLoaded ? 'animate-button' : ''}`}>
          <a href="#reservations" className="main-button">BOOK A TABLE</a>
        </div>
      </div>
    </section>
  );
};

export default Home;