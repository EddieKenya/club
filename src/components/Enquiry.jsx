import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Enquiry.css';

const Enquiry = () => {
  const form = useRef();

  const [status, setStatus] = useState('idle'); 
  // idle | sending | sent

  const handleFeedback = (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_za629lo',
        'template_qvhjwri',
        form.current,
        'xaMDSoAIAi8BsEHBb'
      )
      .then(() => {
        setStatus('sent');
        form.current.reset();

        // Return button to SUBMIT after 2s
        setTimeout(() => {
          setStatus('idle');
        }, 2000);
      })
      .catch(() => {
        setStatus('idle');
        alert('System busy. Please try again.');
      });
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-container">
        <div className="enquiry-info">
          <h2 className="enquiry-title">
            GET IN <span className="gold-text">TOUCH</span>
          </h2>
          <p className="enquiry-text">
            Have a complaint or a suggestion? We value your feedback to keep Kwa Jose the best in Juja.
          </p>
        </div>

        <div className="enquiry-form-wrapper">
          <form ref={form} className="enquiry-form" onSubmit={handleFeedback}>
            <div className="input-group">
              <label>SUBJECT</label>
              <select name="subject" className="enquiry-select">
                <option value="GENERAL ENQUIRY">GENERAL ENQUIRY</option>
                <option value="GRIEVANCE">GRIEVANCE / COMPLAINT</option>
                <option value="IMPROVEMENT">IMPROVEMENT SUGGESTION</option>
              </select>
            </div>

            <div className="input-group">
              <label>YOUR NAME</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your name"
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <label>YOUR MESSAGE</label>
              <textarea
                name="message"
                placeholder="Details..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="enquiry-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'SENDING...'
                : status === 'sent'
                ? 'SENT'
                : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
