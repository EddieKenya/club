import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Enquiry.css';

const Enquiry = () => {
  const form = useRef();

  const handleFeedback = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_ENQUIRY_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        alert("Feedback Received! Management has been notified via email.");
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-container">
        <div className="enquiry-content">
          <h2 className="enquiry-title">VOICE YOUR <br /><span className="gold-text">THOUGHTS</span></h2>
          <p className="enquiry-text">Your grievances and suggestions go straight to our inbox.</p>
        </div>

        <div className="enquiry-form-wrapper">
          <form ref={form} className="enquiry-form" onSubmit={handleFeedback}>
            <div className="input-group">
              <label>SUBJECT</label>
              <select name="subject" className="enquiry-select">
                <option value="Grievance">GRIEVANCE / COMPLAINT</option>
                <option value="Improvement">IMPROVEMENT SUGGESTION</option>
                <option value="General">GENERAL ENQUIRY</option>
              </select>
            </div>
            <div className="input-group">
              <label>YOUR MESSAGE</label>
              <textarea name="message" placeholder="Details..." required></textarea>
            </div>
            <button type="submit" className="enquiry-submit">SUBMIT FEEDBACK</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;