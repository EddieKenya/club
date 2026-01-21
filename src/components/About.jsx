import React from 'react';
import './About.css';

const About = () => {
  // This is the link for when they click to open in a new tab
  const mapRedirectUrl = "https://www.google.com/maps/place/Kwa+Jose/@-1.1030046,37.0130983,17z/";

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Branding */}
        <div className="about-content">
          <h2 className="about-title">
            THE <br /> 
            <span className="gold-text">SANCTUARY</span>
          </h2>
          <p className="about-description">
            Located in the heart of Juja, Kwa Jose Lounge is the ultimate destination 
            for those who seek an elevated nightlife experience.
          </p>
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-num">24/7</span>
              <span className="stat-sub">OPEN EVERY DAY</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">VIP</span>
              <span className="stat-sub">EXCLUSIVE TABLES</span>
            </div>
          </div>
        </div>

        {/* Right Side: Centered Map Container */}
        <div className="about-map-wrapper">
          <a href={mapRedirectUrl} target="_blank" rel="noopener noreferrer" className="map-touch-layer">
            <div className="map-label">OPEN IN GOOGLE MAPS</div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.043322409745!2d37.01052337424163!3d-1.10300459888636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f481011c7169d%3A0xe5e7676508978158!2sKwa%20Jose!5e0!3m2!1sen!2ske!4v1705862000000!5m2!1sen!2ske" 
              className="google-map-iframe"
              allowFullScreen="" 
              loading="lazy" 
              title="Kwa Jose Location"
            ></iframe>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;