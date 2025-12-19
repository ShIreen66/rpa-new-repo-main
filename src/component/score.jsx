import React from 'react'
import "../component/main.css";

import scoreImg from "../assets/score-img.png";


const score = () => {
    return (
        <section className="score-container">
            <div className="container">
                <div className="left">
                    <h2>Unlock Your TrueTenant Score</h2>
                    <p>A tailored score that instantly prequalifies you for curated places to live across our marketplace, guiding you to the perfect home.</p>
                </div>
                <img src={scoreImg} className="img-fluid" alt="Income verification" />
            </div>
        </section>
    )
}

export default score