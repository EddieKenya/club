import React from 'react';
import './Events.css';
import poster from '../assets/events.webp'; 

const Events = () => {
  const eventData = {
    title: "THIS FRIDAY",
    subTitle: "THE AFRO-GENGE MIX",
    description: "Experience the ultimate blend of high-energy Afrobeat and Gengetone. Join us for non-stop dancing and an unforgettable vibe with resident DJs spinning until dawn.",
    image: poster, 
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
        </div>

        {/* Visual Side */}
        <div className="event-visual">
          <div className="image-border">
            <img 
              src={eventData.image} 
              alt="Afro-Genge Party Poster" 
              className="event-poster-img"
              loading="lazy" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1514525253361-bee8a197c9c0?q=80&w=800&auto=format&fit=crop"; 
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;