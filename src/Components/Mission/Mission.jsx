import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import "./Mission.css";
import brandinglogo from "../../assets/Images/branding-logo.svg";
import missionimg from "../../assets/Images/mission-img.webp";
import btnarrow from "../../assets/Images/btn-arrow.svg";
import fullwidthimg from "../../assets/Images/full-width-img.webp";
import quoteicon from "../../assets/Images/quote-icon.svg";

const Mission = forwardRef((props, ref) => {
  const subHeadingRef = useRef(null); // Ref for .sub-heading
  const headingRef = useRef(null); // Ref for h2
  const missionImageRef = useRef(null); // Ref for mission content image
  const missionContentRef = useRef(null); // Ref for mission content inner
  const quoteSectionRef = useRef(null); // Ref for quote section
  const quoteIconRef = useRef(null); // Ref for quote icon
  const quoteTextRef = useRef(null); // Ref for quote text
  const fastServicesRef = useRef(null); // Ref for fast services text
  const fastTextRef = useRef(null); // Ref for "fast services" heading

  useEffect(() => {
    // Intersection Observer for detecting when the elements are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in view, trigger the animation
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                x: -100, // Start the animation off to the left
              },
              {
                opacity: 1,
                x: 0, // End at normal position
                duration: 3,
                ease: "Power2.easeOut",
              }
            );
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Start observing the elements
    if (subHeadingRef.current && headingRef.current) {
      observer.observe(subHeadingRef.current);
      observer.observe(headingRef.current);
    }

    // New observer for the mission image to animate from left to right and scale
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the image is in view, trigger the animation
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                x: -200, // Start from the left of the viewport
                scaleX: 0, // Start the image scaled down (from left to right)
                transformOrigin: "left", // Ensure the scaling happens from the left
              },
              {
                opacity: 1,
                x: 0, // End at its original position
                scaleX: 1, // End at normal size
                duration: 2,
                ease: "Power2.easeOut",
              }
            );
            imageObserver.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is in view
    );

    // Observe the mission image
    if (missionImageRef.current) {
      imageObserver.observe(missionImageRef.current);
    }

    // New observer for the mission content to fade in from the center
    const missionContentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP animation for the mission content section
            gsap.fromTo(
              missionContentRef.current,
              {
                opacity: 0,
                scale: 0.5, // Start from smaller size
                x: "50%", // Start from the center horizontally
                y: "50%", // Start from the center vertically
                transformOrigin: "center center", // Ensure scaling happens from the center
              },
              {
                opacity: 1,
                scale: 1, // End at normal size
                x: "0%", // End at original position
                y: "0%", // End at original position
                duration: 2,
                ease: "Power2.easeOut",
              }
            );
            missionContentObserver.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe the mission content inner
    if (missionContentRef.current) {
      missionContentObserver.observe(missionContentRef.current);
    }

    // Animation for the quote section
    const quoteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP animation for the quote section
            const tl = gsap.timeline({ repeat: -1 }); // Repeat indefinitely

            tl.to(quoteIconRef.current, {
              opacity: 1,
              scale: 1.5,
              duration: 0.5,
              ease: "power1.in",
            })
              .to(quoteIconRef.current, {
                opacity: 0,
                scale: 2.5,
              })
              .to(quoteTextRef.current, {
                opacity: 1,
                scale: 1.5,
                duration: 0.5,
                ease: "power1.in",
              })
              .to(quoteTextRef.current, {
                opacity: 0,
                scale: 2.5,
              })
              .to(fastServicesRef.current, {
                opacity: 1,
                scale: 1.5,
                duration: 0.5,
                ease: "power1.in",
              })
              .to(fastServicesRef.current, {
                opacity: 0,
                scale: 2.5,
              })
              .to(fastTextRef.current, {
                opacity: 1,
                scale: 1.5,
                duration: 0.5,
                ease: "power1.in",
              })
              .to(fastTextRef.current, {
                opacity: 0,
                scale: 2.5,
              });

            quoteObserver.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is in view

    if (quoteSectionRef.current) {
      quoteObserver.observe(quoteSectionRef.current);
    }

    return () => {
      // Cleanup observers when component unmounts
      if (subHeadingRef.current && headingRef.current) {
        observer.unobserve(subHeadingRef.current);
        observer.unobserve(headingRef.current);
      }

      if (missionImageRef.current) {
        imageObserver.unobserve(missionImageRef.current);
      }

      if (missionContentRef.current) {
        missionContentObserver.unobserve(missionContentRef.current);
      }

      if (quoteSectionRef.current) {
        quoteObserver.unobserve(quoteSectionRef.current);
      }
    };
  }, []);

  return (
    <section className="mission-section" ref={ref}>
      <div className="container">
        <div className="mission-heading-outer">
          <div className="mission-heading-inner">
            <p className="sub-heading" ref={subHeadingRef}>
              Overview of Our Mission
            </p>
            <h2 ref={headingRef}>
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
          <div className="mission-content-image" ref={missionImageRef}>
            <img
              src={missionimg}
              alt="mission content image"
              className="content-image"
            />
          </div>
          <div className="mission-content-inner" ref={missionContentRef}>
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

        <div className="quote-section" ref={quoteSectionRef}>
          <img
            src={quoteicon}
            alt="quote icon"
            className="quote-icon"
            ref={quoteIconRef}
          />
          <p ref={quoteTextRef}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <h1 ref={fastServicesRef}>1.8x</h1>
          <h6 ref={fastTextRef}>fast services</h6>
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
