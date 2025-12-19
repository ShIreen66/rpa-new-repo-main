import React, { useState, useRef, useEffect } from "react";
import "../component/main.css";

const CTASection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    return (
        <section className="cta-section py-5">
            <div className="container">
                <h2 className="mb-3">Still Have Questions?</h2>
                <p>Join thousands of renters who've simplified their search</p>
                <button className="btn-primary ml-auto" style={{ background: '#fff', color: '#000', borderColor: '#fff' }}>
                    Get Verified Now 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M0.75 13.25L13.25 0.75M13.25 0.75H3.875M13.25 0.75V10.125" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
            </div>
        </section>
    );
};

export default CTASection;
