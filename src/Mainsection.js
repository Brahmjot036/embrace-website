import React from 'react';
import './MainSection.css';
import profilePic from './assets/Profilepic.png'; // Ensure your picture path is correct

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="left-content">
        <h1 className="heading">WE TAKE CARE OF OUR BRAND</h1>
        <p className="subheading">We care about ou work and we care about our clients.</p>
        <div className="email-section">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="talk-button">Let's Talk</button>
        </div>
      </div>
      <div className="right-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default MainSection;
