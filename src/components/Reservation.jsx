import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Reservation.css';

const Reservation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_RESERVATION_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        alert("Reservation Request Sent! Check your email for tracking.");
        e.target.reset();
    }, (error) => {
        alert("Failed to send: " + error.text);
    });
  };

  return (
    <section id="reservations" className="res-section">
      <div className="res-container">
        <div className="res-info">
          <h2 className="res-title">VIP <br /><span className="purple-glow">RESERVATIONS</span></h2>
          <p className="res-subtitle">Track your table requests directly in your management inbox.</p>
        </div>

        <div className="res-form-wrapper">
          <form ref={form} className="res-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" name="from_name" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" name="user_email" required />
              </div>
              <div className="form-group">
                <label>GUESTS</label>
                <input type="number" name="guest_count" required />
              </div>
            </div>
            <div className="form-group">
              <label>EVENT DATE</label>
              <input type="date" name="event_date" required />
            </div>
            <button type="submit" className="res-submit">REQUEST A TABLE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;