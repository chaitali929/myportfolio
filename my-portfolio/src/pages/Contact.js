import React from "react";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-note">
        Feel free to reach out to me via email, LinkedIn, or any of my social media profiles. I would love to hear from you!
      </p>
      <div className="contact-details">
        <ul>
         
          <li>Email: <a href="mailto:dhaijec@gmail.com" target="_blank" rel="noopener noreferrer">dhaijec@gmail.com</a></li>

         
          <li>LinkedIn: <a href="https://www.linkedin.com/in/chaitali-dhaije-2790562b3/" target="_blank" rel="noopener noreferrer">Click here</a></li>

          
          <li>Instagram: <a href="https://www.instagram.com/_._dorotheaa_._/" target="_blank" rel="noopener noreferrer">Click here</a></li>
          <li>WhatsApp: <a href="https://wa.me/8767920896" target="_blank" rel="noopener noreferrer">Click here</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
