import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../component/main.css";

import logo3d from "../assets/3d-logo.png";
import applyInstantlyIcon from "../assets/apply-instantly.gif";
import signLeasesIcon from "../assets/sign-leases.gif";
import payRentIcon from "../assets/pay-rent.gif";
import trackAppIcon from "../assets/track-app.gif";

gsap.registerPlugin(ScrollTrigger);

const EverythingOnePlace = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  return (
    <section className="everything-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2>
            Everything You Need
            <br />
            In One Place
          </h2>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left column */}
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column gap-4">
            <FeatureCard
              ref={(el) => (cardsRef.current[0] = el)}
              title="Apply Instantly"
              text="Share your fully verified rental profile with any landlord in seconds, no repeated forms or documents."
              icon={applyInstantlyIcon}
            />

            <FeatureCard
              ref={(el) => (cardsRef.current[1] = el)}
              title="Pay Rent"
              text="Set up automatic monthly payments, get reminders, and access your entire payment history anytime."
              icon={payRentIcon}
            />
          </div>

          {/* Center card */}
          <div className="col-lg-4 col-md-4 col-12 d-flex">
            <div className="center-card w-100 rounded-4 d-flex align-items-center justify-content-center">
              <img src={logo3d} className="img-fluid" alt="Hero" />
            </div>
          </div>

          {/* Right column */}
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column gap-4">
            <FeatureCard
              ref={(el) => (cardsRef.current[3] = el)}
              title="Sign Leases"
              text="Review and sign agreements digitally with bank-level security, from any device, wherever you are."
              icon={signLeasesIcon}
            />

            <FeatureCard
              ref={(el) => (cardsRef.current[4] = el)}
              title="Track Applications"
              text="See real-time updates on every application and know exactly where you stand."
              icon={trackAppIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Feature Card Component */
const FeatureCard = ({ title, text, icon }, ref) => (
  <div
    className="feature-card p-4 rounded-4"
    ref={ref}
    style={{
      background: "#FBFBFB",
      borderColor: "#F3F3F3",
      borderWidth: "1px",
      borderRadius: "24px",
    }}
  >
    <div className="feature-icon mb-3">
      <img src={icon} alt={title} style={{ width: "70px", height: "70px" }} />
    </div>
    <h5 className="fw-500 mb-2">{title}</h5>
    <p className="text-muted mb-0">{text}</p>
  </div>
);

export default EverythingOnePlace;
