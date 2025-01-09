import React, { forwardRef } from "react";
import "./Mission.css";
import brandinglogo from "../../assets/Images/branding-logo.svg";
import missionimg from "../../assets/Images/mission-img.webp";
import btnarrow from "../../assets/Images/btn-arrow.svg";
import fullwidthimg from "../../assets/Images/full-width-img.webp";
import quoteicon from "../../assets/Images/quote-icon.svg";

const Mission = forwardRef((props, ref) => {
  return (
    <section className="mission-section" ref={ref}>
      <div className="container">
        <div className="mission-heading-outer">
          <div className="mission-heading-inner">
            <p className="sub-heading"> Overview of Our Mission</p>
            <h2>
              Lorem Ipsum is simply dummy <strong>text of the printing</strong>{" "}
              and typesetting industry.
            </h2>
          </div>
          <div className="mission-brand-logo">
            <img
              src={brandinglogo}
              alt="branding logo"
              className="branding-logo"
            />
          </div>
        </div>

        <div className="mission-content-outer">
          <div className="mission-content-image">
            <img
              src={missionimg}
              alt="mission content image"
              className="content-image"
            />
          </div>
          <div className="mission-content-inner">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters as opposed to using 'Content here, content
              here', making it look like readable English.
            </p>
            <button className="common-button">
              Explore Us
              <span>
                <img src={btnarrow} alt="btn arrow" className="btn-arrow" />
              </span>
            </button>
          </div>
        </div>

        <div className="quote-section">
          <img src={quoteicon} alt="quote icon" className="quote-icon" />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <h1>1.8x</h1>
          <h6>fast services</h6>
        </div>
      </div>

      <div
        className="full-width-img"
        style={{
          backgroundImage: `url(${fullwidthimg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </section>
  );
});

export default Mission;
