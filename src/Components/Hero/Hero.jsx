import React, { useEffect } from "react";
import { gsap } from "gsap";
import bannerbgimg from "../../assets/Images/banner-bg-img.jpg";
import bannerScrolldown from "../../assets/Images/banner-Scrolldown.svg";
import halfcircleshape from "../../assets/Images/half-circle-shape.svg";
import "./Hero.css";

function HeroSection({ scrollToMission }) {
  useEffect(() => {
    // Animate words in <h3> (as in previous example)
    const words = document.querySelectorAll(".hero-section h3 span");
    gsap.fromTo(
      words,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "Power1.easeOut",
      }
    );

    // Intersection Observer for subtitle animation
    const subtitle = document.querySelector(".subtitle");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate letters in <p className="subtitle"> for wave effect when subtitle is in view
            const letters = document.querySelectorAll(".subtitle span");
            gsap.fromTo(
              letters,
              { y: "100%", opacity: 0 }, // Start below and invisible
              {
                y: "0%", // Move to the original position
                opacity: 1, // Fade in
                duration: 0.8, // Duration of each letter
                stagger: 0.05, // Slight delay between each letter
                ease: "power1.out", // Smooth easing
              }
            );
            // Stop observing after animation
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is in the viewport
      }
    );

    // Start observing the subtitle element
    if (subtitle) {
      observer.observe(subtitle);
    }

    return () => {
      // Cleanup observer when component unmounts
      if (observer && subtitle) {
        observer.disconnect();
      }
    };
  }, []);

  // Function to split text into spans (for <h3>)
  const splitText = (text) =>
    text.split(" ").map((word, index) => (
      <span
        key={index}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {word}&nbsp;
      </span>
    ));

  // Function to split letters into spans (for <p className="subtitle">)
  const splitLetters = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
          whiteSpace: "pre", // Keeps spaces intact
        }}
      >
        {char}
      </span>
    ));

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${bannerbgimg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <h3>
          {splitText(
            "Humanity has the ability to make development sustainable to ensure that it meets the needs of the present without compromising the ability of future generations to meet their own needs."
          )}
        </h3>
        <p className="subtitle">
          {splitLetters("-- WCED's 1987 Brundtland report, Our Common Future")}
        </p>
        <div className="bannerScrolldown-outer">
          <img
            src={bannerScrolldown}
            alt="bannerScrolldown icon"
            className="bannerScrolldown-icon"
            onClick={scrollToMission}
          />
        </div>
      </div>

      <div className="halfcircleshape-icon">
        <img
          src={halfcircleshape}
          alt="half circle shape"
          className="halfcircleshape"
        />
      </div>
    </div>
  );
}

export default HeroSection;
