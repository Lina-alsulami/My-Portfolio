import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactContent = () => {
  return (
    <div className="contact-container">
      <div id="stars"></div>
      <div className="contact-card">
        <h1>Let's Connect</h1>
        
        
        <div className="social-links">
          
          <a href="mailto:LinaAL-sulami@outlook.com" className="social-icon">
            <FaEnvelope />
            <span>Email</span>
          </a>

          
          <a href="https://www.linkedin.com/in/lina-alsulami-b39174397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          
          <a href="https://github.com/Lina-alsulami" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;