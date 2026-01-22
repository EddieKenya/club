import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Enquiry.css';

const Enquiry = () => {
  const form = useRef();

  const handleFeedback = (e) => {
    e.preventDefault();

    // Using your second Template ID: template_qvhjwri
    emailjs.sendForm(
      'service_za629lo',   
      'template_qvhjwri', 
      form.current, 
      'xaMDSoAIAi8BsEHBb'    
    )
    .then(() => {
        alert("Thank you! Your feedback has been sent to management.");
        if (form.current) {
          form.current.reset(); // This clears the name, subject, and message fields
        }
    }, (error) => {
        console.log("Error sending enquiry:", error.text);
        alert("System busy. Please try again later.");
    });
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-container">
        <div className="enquiry-info">
          <h2 className="enquiry-title">GET IN <span className="gold-text">TOUCH</span></h2>
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
              {/* autoComplete="off" helps stop the browser from forcing a white background */}
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
              <textarea name="message" placeholder="Details..." required></textarea>
            </div>

            <button type="submit" className="enquiry-submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;