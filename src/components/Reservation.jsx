import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Reservation.css';

const Reservation = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_za629lo',
        'template_7x1xnaf',
        form.current,
        'xaMDSoAIAi8BsEHBb'
      )
      .then(() => {
        setStatus('sent');
        form.current.reset();

        // Return button to CONFIRM REQUEST after 2s
        setTimeout(() => setStatus('idle'), 2000);
      })
      .catch(() => {
        setStatus('idle');
        alert('Failed to send request. Please try again.');
      });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="res-section">
      <div className="res-container">
        <div className="res-info">
          <h2 className="res-title">
            VIP <br />
            <span className="purple-glow">RESERVATIONS</span>
          </h2>
          <p className="res-subtitle">
            Secure your sanctuary. All table requests are processed
            immediately for our management team to review.
          </p>
        </div>

        <div className="res-form-wrapper">
          <form ref={form} className="res-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label>GUESTS</label>
                <input
                  type="number"
                  name="guest_count"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+254 7xx xxx xxx"
                  pattern="^[+0-9\s()-]{7,}$"
                />
              </div>

              <div className="form-group">
                <label>EVENT DATE</label>
                <input
                  type="date"
                  name="event_date"
                  min={today}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="res-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'SENDING...'
                : status === 'sent'
                ? 'SENT'
                : 'CONFIRM REQUEST'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
