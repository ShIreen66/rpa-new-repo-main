import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../component/main.css";

import stepOne from "../assets/step-1.png";
import stepTwo from "../assets/step-2.png";
import stepThree from "../assets/step-3.png";
import stepFour from "../assets/step-4.png";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Vertical line progress */
      gsap.to(".line-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container timeline-wrapper pt-5 mt-4" ref={containerRef}>
      <h2 className="timeline-title text-center">How It Works</h2>

      <div className="timeline-section">
        {/* Vertical Line */}
        <div className="line-track">
          <div className="line-progress" />
        </div>

        {/* Step 1 */}
        <div className="step-item">
          <div className="step-content">
            <div className="step-media">
              <img src={stepOne} className="img-fluid" alt="Income verification" />
            </div>
            <span className="step-number">1</span>
            <div className="step-data">
              <h3>Secure Income Verification</h3>
              <p>
                Connect your bank through Flinks to confirm your income safely and privately.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-item right-text">
          <div className="step-content">
            <div className="step-media">
              <img src={stepTwo} className="img-fluid" alt="Identity verification" />
            </div>
            <span className="step-number">2</span>
            <div className="step-data">
              <h3>Identity Verification</h3>
              <p>
                Complete a secure ID and biometric scan to confirm your identity.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-item">
          <div className="step-content">
            <div className="step-media">
              <img src={stepThree} className="img-fluid" alt="Employment details" />
            </div>
            <span className="step-number">3</span>
            <div className="step-data">
              <h3>Employment & Rental Details</h3>
              <p>
                Provide your current and past employment and rental history to complete your profile.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step-item right-text">
          <div className="step-content">
            <div className="step-media">
              <img src={stepFour} className="img-fluid" alt="Tenant score result" />
            </div>
            <span className="step-number">4</span>
            <div className="step-data">
              <h3>Your TrueTenant Score</h3>
              <p>
                Receive your personalized score and unlock rentals you qualify for.
              </p>
              <button
                className="btn-primary"
                ref={btnRef}
                aria-label="Discover more about your TrueTenant score"
              >
                Discover More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M0.75 13.25L13.25 0.75M13.25 0.75H3.875M13.25 0.75V10.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
