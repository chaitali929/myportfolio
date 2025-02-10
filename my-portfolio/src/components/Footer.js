import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp} from "react-icons/fa";
import '../styles/Footer.css';  // We'll add the styles in the next step

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Connect with me:</p>
        <div className="social-icons">
          
          <a href="https://www.linkedin.com/in/chaitali-dhaije-2790562b3" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_._dorotheaa_._" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/8767920896" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
