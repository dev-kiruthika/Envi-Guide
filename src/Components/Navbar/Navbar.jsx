import React from "react";
import logoimg from "../../assets/Images/enviguide_Main_Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src={logoimg}
              alt="Enviguide Logo"
              className="logo-image"
            />
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#solutions">Solutions</a>
            </li>
            <li className="nav-item">
              <a href="#impact">Impact</a>
            </li>
            <li className="nav-item">
              <a href="#resources">Resources</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
