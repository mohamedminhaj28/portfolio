import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import '../assets/css/SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons-vertical">
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTwitter />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedinIn />
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default SocialIcons;
