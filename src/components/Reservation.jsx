import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Reservation.css';

const Reservation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // The order is: Service ID, Template ID, Form Ref, Public Key
    emailjs.sendForm(
      'service_za629lo', // Replace this with your Service ID (e.g., service_xxxx)
      'template_7x1xnaf', // Your specific Reservation Template ID
      form.current, 
      'xaMDSoAIAi8BsEHBb'   // Replace this with your Public Key from the Account tab
    )
    .then((result) => {
        console.log(result.text);
        alert("VIP Reservation Request Sent! Management will contact you shortly.");
        e.target.reset(); // This clears the form after sending
    }, (error) => {
        console.log(error.text);
        alert("Failed to send request. Please check your connection.");
    });
  };

  return (
    <section id="reservations" className="res-section">
      <div className="res-container">
        
        <div className="res-info">
          <h2 className="res-title">VIP <br /><span className="purple-glow">RESERVATIONS</span></h2>
          <p className="res-subtitle">
            Secure your sanctuary. All table requests are processed 
            immediately for our management team to review.
          </p>
        </div>

        <div className="res-form-wrapper">
          {/* Ensure the 'ref' is attached to the form */}
          <form ref={form} className="res-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" name="from_name" required placeholder="Enter your name" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" name="user_email" required placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label>GUESTS</label>
                <input type="number" name="guest_count" required min="1" />
              </div>
            </div>

            <div className="form-group">
              <label>EVENT DATE</label>
              <input type="date" name="event_date" required />
            </div>

            <button type="submit" className="res-submit">CONFIRM REQUEST</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Reservation;