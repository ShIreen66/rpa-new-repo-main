import React from 'react'
import "../component/main.css";

import varifyTime from "../assets/varified-minute.gif";
import dataProtect from "../assets/data-protected.gif";
import moreListing from "../assets/unlock-more-listings.gif";

const Why = () => {
    return (
        <section className="container pb-5 mb-4">
            <h2 className="timeline-title text-center mb-4">Why TrueTenant?</h2>

            <div className="row why-option">
                <div className="col-md-4 col-12">
                    <img src={varifyTime} className="img-fluid" alt="Verified in minutes animation" />
                    <h5 className="why-title">Verified In Minutes</h5>
                    <p>Complete your rental qualifications once and share your verified profile anywhere you apply.</p>
                </div>

                <div className="col-md-4 col-12">
                    <img src={dataProtect} className="img-fluid" alt="Data protection animation" />
                    <h5 className="why-title">Your Data, Protected</h5>
                    <p>Bank-level security with strict privacy controls, so you decide exactly what gets shared and when.</p>
                </div>

                <div className="col-md-4 col-12">
                    <img src={moreListing} className="img-fluid" alt="Unlock more listings animation" />
                    <h5 className="why-title">Unlock More Listings</h5>
                    <p>A verified profile shows landlords you qualify, letting you skip repeat screenings and match with the right places faster.</p>
                </div>
            </div>
        </section>
    )
}

export default Why;
