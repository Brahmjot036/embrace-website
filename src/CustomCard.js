import React from 'react';
import './CustomCard.css';

const CustomCard = () => {
  return (
    <div className="custom-card">
      <div className="card-left">
        <h3 className="card-heading">Start your journey <br/>with us now</h3>
        <button className="start-now-button">Start Now</button>
      </div>
      <div className="card-right">
        <img src="circle.png" alt="Circular Image" className="circular-image" />
      </div>
    </div>
  );
};

export default CustomCard;
