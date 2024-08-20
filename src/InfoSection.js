import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="left-column">
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-heading">245%</h3>
            <p className="info-subheading">More Revenue for the Brand</p>
          </div>
          <div className="info-item">
            <h3 className="info-heading">130K</h3>
            <p className="info-subheading">Audience Reached!</p>
          </div>
        </div>
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-heading">50+</h3>
            <p className="info-subheading">Brands Trust us</p>
          </div>
          <div className="info-item">
            <h3 className="info-heading">24+</h3>
            <p className="info-subheading">World wide Awards</p>
          </div>
        </div>
      </div>
      <div className="right-column">
        <h2 className="right-heading">Commitments</h2>
        <p className="right-subheading">We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
      </div>
      <div className="learn-more-text">
          <span className="learn-more">Learn More</span>
          <span className="arrow-button">&#8594;</span> {/* Right arrow */}
        </div>
    </div>
  );
};

export default InfoSection;

