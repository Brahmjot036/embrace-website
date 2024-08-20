import React from 'react';
import './CardSection.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card">
        <div className="card-left">
          <h3 className="card-heading">Elevate Your<br/>
            Brand Today!</h3>
        </div>
        <div className="card-right">
          <p className="card-subheading">Ready to Transform your digital dresence?Let's<br/>create magic together! Book a call now!</p>
          <button className="book-call-Button">Book a Call</button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
