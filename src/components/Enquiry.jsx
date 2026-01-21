import React from 'react';
import './Enquiry.css';

const Enquiry = () => {
  return (
    <section id="enquiry" className="enquiry-section">
      <div className="enquiry-container">
        
        {/* Left Side: Text and Contact Branding */}
        <div className="enquiry-content">
          <h2 className="enquiry-title">VOICE YOUR <br /><span className="gold-text">THOUGHTS</span></h2>
          <p className="enquiry-text">
            At Kwa Jose, we strive for perfection. Whether you have a grievance, 
            an enquiry, or a suggestion on how we can improve your sanctuary 
            experience, we are listening.
          </p>
          <div className="contact-meta">
            <span className="meta-item">DIRECT LINE: +254 123 456 789</span>
            <span className="meta-item">EMAIL: MANAGEMENT@KWAJOSE.COM</span>
          </div>
        </div>

        {/* Right Side: The Feedback Form */}
        <div className="enquiry-form-wrapper">
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>SUBJECT</label>
              <select className="enquiry-select">
                <option value="general">GENERAL ENQUIRY</option>
                <option value="grievance">GRIEVANCE / COMPLAINT</option>
                <option value="improvement">IMPROVEMENT SUGGESTION</option>
                <option value="other">OTHER</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>YOUR MESSAGE</label>
              <textarea placeholder="Describe your experience or suggestion in detail..." required></textarea>
            </div>
            
            <button type="submit" className="enquiry-submit">SUBMIT FEEDBACK</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;