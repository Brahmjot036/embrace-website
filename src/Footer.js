import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2022 Embrace, Inc. - All Rights Reserved
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Terms of Use</a>
        <a href="#" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
