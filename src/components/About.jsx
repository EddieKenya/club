import React from 'react';
import './About.css';

const About = () => {
  // Stable link for the "Open in Maps" button focusing on Kwa Jose
  const mapRedirectUrl = "https://www.google.com/maps/search/?api=1&query=Kwa+Jose+Lounge+Juja";

  // Search-based Embed URL - more stable than complex coordinate parameters
  const mapEmbedUrl = "https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=Kwa+Jose+Lounge+Juja";
  // NOTE: If you don't have an API key, use the simplified search URL below:
  const simpleEmbed = "https://maps.google.com/maps?q=Kwa%20Jose%20Lounge%20Juja&t=&z=15&ie=UTF8&iwloc=&output=embed";

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

        {/* Right Side: Map Container */}
        <div className="about-map-wrapper">
          <a href={mapRedirectUrl} target="_blank" rel="noopener noreferrer" className="map-touch-layer">
            <div className="map-label">OPEN IN GOOGLE MAPS</div>
            <div className="map-frame-container">
              <iframe 
                src={simpleEmbed} 
                className="google-map-iframe"
                allowFullScreen="" 
                loading="lazy" 
                title="Kwa Jose Location"
              ></iframe>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;