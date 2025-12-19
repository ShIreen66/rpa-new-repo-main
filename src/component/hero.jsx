import React from "react";
import "../component/main.css";
import heroImg from "../assets/hero-img.png";
import heroOverlay from "../assets/hero-overlay.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-main">
            <img src={heroImg} className="img-fluid" alt="Hero" />

            <div className="overlay-content">
              <div className="action">
                <h1>
                  The last <br /> rental application you’ll ever fill out
                </h1>
                <button className="btn-primary">Start Screening <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M0.75 13.25L13.25 0.75M13.25 0.75H3.875M13.25 0.75V10.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>
              </div>
            <img src={heroOverlay} className="img-fluid" alt="Hero" />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
