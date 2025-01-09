import React from "react";
import "./Footer.css";
import halfcircleshape from "../../assets/Images/half-circle-shape.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year
  return (
    <footer className="footer">
      <div className="halfcircleshape-icon">
        <img
          src={halfcircleshape}
          alt="half circle shape"
          className="halfcircleshape"
        />
      </div>
      <div className="container">
        <div className="footer-top">
          <h1 className="footer-heading">
            LET'S TALK
            <br />
            WITH US
          </h1>
          <p className="footer-email">hello@gmail.com</p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright"> ©{currentYear} enviguide</p>
          <ul className="footer-links">
            <li>
              <a href="#partnerships">Partnerships</a>
            </li>
            <li>
              <a href="#get-involved">Get Involved</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#policies">Legal and Policies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
