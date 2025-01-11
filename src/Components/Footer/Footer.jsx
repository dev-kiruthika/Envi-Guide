import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Footer.css";
import halfcircleshape from "../../assets/Images/half-circle-shape.svg";

const Footer = () => {
  const footerHeadingRef = useRef(null); // Ref for footer heading
  const footerEmailRef = useRef(null); // Ref for footer email

  useEffect(() => {
    const headingElement = footerHeadingRef.current; // Store ref value in a variable
    const emailElement = footerEmailRef.current; // Store ref value in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the footer heading is in view, trigger the animation
          if (entry.isIntersecting) {
            // GSAP animation for the fadein and wavy effect for the heading
            if (entry.target === headingElement) {
              gsap.fromTo(
                headingElement,
                {
                  opacity: 0, // Start with opacity 0 for fade-in
                  y: -100, // Start the animation off the top for upward movement
                  rotation: -10, // Add a slight rotation for the wavy effect
                },
                {
                  opacity: 1, // End with full opacity
                  y: 0, // End at its normal position
                  rotation: 0, // End with no rotation
                  duration: 2, // Animation duration
                  ease: "Power2.easeOut", // Ease effect
                }
              );
            }

            // GSAP animation for the fadein and wavy effect for the email
            if (entry.target === emailElement) {
              gsap.fromTo(
                emailElement,
                {
                  opacity: 0, // Start with opacity 0 for fade-in
                  y: -100, // Start the animation off the top for upward movement
                  rotation: -10, // Add a slight rotation for the wavy effect
                },
                {
                  opacity: 1, // End with full opacity
                  y: 0, // End at its normal position
                  rotation: 0, // End with no rotation
                  duration: 2, // Animation duration
                  ease: "Power2.easeOut", // Ease effect
                }
              );
            }

            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is in view

    // Start observing the footer heading and email paragraph
    if (headingElement) {
      observer.observe(headingElement);
    }
    if (emailElement) {
      observer.observe(emailElement);
    }

    return () => {
      // Cleanup observer when component unmounts
      if (headingElement) {
        observer.unobserve(headingElement);
      }
      if (emailElement) {
        observer.unobserve(emailElement);
      }
    };
  }, []);

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
          <h1 className="footer-heading" ref={footerHeadingRef}>
            LET'S TALK
            <br />
            WITH US
          </h1>
          <p className="footer-email" ref={footerEmailRef}>
            hello@gmail.com
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">©{currentYear} enviguide</p>
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
