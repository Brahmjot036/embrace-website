import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <a href="#How it works" className="nav-link">How it works</a>
      <a href="#Our work" className="nav-link">Our work</a>
      <a href="#pricing" className="nav-link">Pricing</a>
      <a href="About us" className="nav-link">About us</a>
      <div className="special-button-container">
        <a href="#contact" className="special-button">Book a Call</a>
      </div>
    </nav>
  );
};

export default Navbar;

