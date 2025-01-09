import React from "react";
import bannerbgimg from "../../assets/Images/banner-bg-img.jpg";
import bannerScrolldown from "../../assets/Images/banner-Scrolldown.svg";
import halfcircleshape from "../../assets/Images/half-circle-shape.svg";
import "./Hero.css";

function HeroSection({ scrollToMission }) {
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
          Humanity has the ability to make development sustainable to ensure
          that it meets the needs of the present without compromising the
          ability of future generations to meet their own needs.
        </h3>
        <p className="subtitle">
          -- WCED's 1987 Brundtland report, Our Common Future
        </p>
        <div className="bannerScrolldown-outer">
          <img
            src={bannerScrolldown}
            alt="bannerScrolldown icon"
            className="bannerScrolldown-icon"
            onClick={scrollToMission} // Call the scroll handler
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
