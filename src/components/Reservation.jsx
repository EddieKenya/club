import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Request:', formData);
    alert('Request Sent. Our VIP host will contact you shortly.');
  };

  return (
    <section id="reservations" className="res-section">
      <div className="res-container">
        
        {/* Left Side: VIP Info */}
        <div className="res-info">
          <h2 className="res-title">VIP <br /><span className="purple-glow">RESERVATIONS</span></h2>
          <p className="res-subtitle">Elevate your night at Kwa Jose. Secure a private table for the ultimate sanctuary experience.</p>
          
          <div className="vip-perks">
            <div className="perk">
              <span className="perk-icon">✦</span>
              <div>
                <h4>Fast Track Entry</h4>
                <p>Bypass the queue via our dedicated VIP entrance.</p>
              </div>
            </div>
            <div className="perk">
              <span className="perk-icon">✦</span>
              <div>
                <h4>Personal Hostess</h4>
                <p>Dedicated service for your table all night long.</p>
              </div>
            </div>
            <div className="perk">
              <span className="perk-icon">✦</span>
              <div>
                <h4>Premium Placement</h4>
                <p>The best views of the DJ booth and dance floor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Request Form */}
        <div className="res-form-wrapper">
          <form className="res-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" required placeholder="John Doe" />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>GUESTS</label>
                <input type="number" min="1" max="15" placeholder="QTY" />
              </div>
            </div>

            <div className="form-group">
              <label>EVENT DATE</label>
              <input type="date" required />
            </div>

            <div className="form-group">
              <label>SPECIAL REQUESTS</label>
              <textarea placeholder="Tell us about your occasion (Birthday, Anniversary, etc.)"></textarea>
            </div>

            <button type="submit" className="res-submit">REQUEST A TABLE</button>
          </form>
          <p className="res-note">*Reservations are subject to availability and minimum spend requirements.</p>
        </div>

      </div>
    </section>
  );
};

export default Reservation;