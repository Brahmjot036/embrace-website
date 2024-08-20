import React from 'react';
import './CompanyLogos.css';
import logo1 from './assets/logo1.jpg'; // Replace with your actual logo paths
import logo2 from './assets/logo2.jpg';
import logo3 from './assets/logo3.jpg';
import logo4 from './assets/logo4.jpg';
import logo5 from './assets/logo5.jpg';
import logo6 from './assets/logo6.jpg';
import logo7 from './assets/logo7.jpg';
import logo8 from './assets/logo8.jpg';
import logo9 from './assets/logo9.jpg';
import logo10 from './assets/logo10.png';

const CompanyLogos = () => {
  return (
    <div className="company-logos-section">
      <h2 className="section-heading">Companies we work with</h2>
      <div className="logos-container">
        <div className="logo-row">
          <img src={logo1} alt="Company 1" className="company-logo" />
          <img src={logo2} alt="Company 2" className="company-logo" />
          <img src={logo3} alt="Company 3" className="company-logo" />
          <img src={logo4} alt="Company 4" className="company-logo" />
          <img src={logo5} alt="Company 5" className="company-logo" />
        </div>
        <div className="logo-row">
          <img src={logo6} alt="Company 6" className="company-logo" />
          <img src={logo7} alt="Company 7" className="company-logo" />
          <img src={logo8} alt="Company 8" className="company-logo" />
          <img src={logo9} alt="Company 9" className="company-logo" />
          <img src={logo10} alt="Company 10" className="company-logo" />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
