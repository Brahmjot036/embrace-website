import React from 'react';
import './FAQContactSection.css';

const FAQContactSection = () => {
  return (
    <div className="faq-contact-section">
      <div className="faq-left">
        <div className="faq-item">
          <p className="faq-question">How do i sign up for the project?</p>
          <span className="faq-plus">+</span>
        </div>
        <hr />
        <div className="faq-item">
          <p className="faq-question">What thing that i should prepare before starting?</p>
          <span className="faq-plus">+</span>
        </div>
        <hr />
        <div className="faq-item">
          <p className="faq-question">Does my company need help for marketing advices?</p>
          <span className="faq-plus">+</span>
        </div>
      </div>
      <div className="contact-right">
        <h2 className="contact-heading">How we can help you?
        </h2>
        <p className="contact-subheading">Follow our newsletter. We will regulary update our latest project and availability.</p>
        <div className="contact-form">
          <input type="email" placeholder="Your Email" className="email-input" />
          <button className="contact-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default FAQContactSection;
