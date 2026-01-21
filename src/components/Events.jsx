import React from 'react';
import './Events.css';

const Events = () => {
  const eventData = {
    title: "THIS FRIDAY",
    subTitle: "THE AFRO-GENGE MIX",
    description: "Experience the ultimate blend of high-energy Afrobeat and Gengetone. Join us for non-stop dancing and an unforgettable vibe with resident DJs spinning until dawn.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzrigxBmb0VxTK7Egcnc-0fwjagAXM7NcJ8m_P3-s1qG7U_NEvdI6qToEqkua2EX1RXqo3UWGt7JXBWOhN_wV9keWwBjkI30UiR-PVAh9HX0FJDYIjTypwdaF8LfYjxh5X59X3Evq4aqukp=s1360-w1360-h1020-rw", 
    features: [
      "Resident DJ Lineup",
      "24/7 Dance Floor",
      "Drink Specials All Night",
      "VIP Booths Available"
    ]
  };

  return (
    <section id="events" className="events-section">
      <div className="event-container">
        
        {/* Information Side */}
        <div className="event-info">
          <h3 className="event-tag">{eventData.title} <span className="arrow">►</span></h3>
          <h2 className="event-main-title">{eventData.subTitle}</h2>
          <p className="event-text">{eventData.description}</p>
          
          <ul className="event-features">
            {eventData.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          
          {/* Button has been removed from here */}
        </div>

        {/* Visual Side */}
        <div className="event-visual">
          <div className="image-border">
            <img 
              src={eventData.image} 
              alt="Afro-Genge Party Poster" 
              className="event-poster-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src="https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;