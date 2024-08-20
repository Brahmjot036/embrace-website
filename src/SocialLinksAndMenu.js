import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons
import './SocialLinksAndMenu.css';
import Pic from './assets/logo.png';


const SocialLinksAndMenu = () => {
  return (
    <div className="social-links-and-menu">
      <div className="left-section">
      <img src={Pic} alt="Profile" className="Profile-pic" />

        <div className="social-icons-row">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebook />
          </a>
        </div>
        <button className="contact-us-button">Contact Us</button>
      </div>
      <div className="right-section">
        <div className="menu-column">
          <a href="#" className="menu-link">Work With Us</a>
          <a href="#" className="menu-link">Advertise With Us</a>
          <a href="#" className="menu-link">Support Us</a>
        </div>
        <div className="menu-column">
          <a href="#" className="menu-link">Business Advices</a>
          <a href="#" className="menu-link">Private Coaching</a>
          <a href="#" className="menu-link">Our Work</a>
        </div>
        <div className="menu-column">
          <a href="#" className="menu-link">About Us</a>
          <a href="#" className="menu-link">FAQs</a>
          <a href="#" className="menu-link">Report a Bug</a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksAndMenu;
