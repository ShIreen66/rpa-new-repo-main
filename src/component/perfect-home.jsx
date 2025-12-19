import { useEffect, useRef } from "react";
import "../component/main.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/home1.png";
import img2 from "../assets/home2.png";
import img3 from "../assets/home3.png";
import img4 from "../assets/home4.png";

gsap.registerPlugin(ScrollTrigger);

const HomeListing = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const trackRef = useRef(null);
    const currentIndex = useRef(0);

    const CARD_WIDTH = 300;
    const GAP = 24;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });
        }, sectionRef);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, []);

    const listings = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
    ];

    const slide = (direction) => {
        const maxIndex = listings.length - 1;

        if (direction === "next" && currentIndex.current < maxIndex) {
            currentIndex.current += 1;
        }

        if (direction === "prev" && currentIndex.current > 0) {
            currentIndex.current -= 1;
        }

        gsap.to(trackRef.current, {
            x: -(currentIndex.current * (CARD_WIDTH + GAP)),
            duration: 0.8,
            ease: "power3.out",
        });
    };

    return (
        <section className="py-5" ref={sectionRef}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Find Your Perfect Home</h2>
                    <p className="text-muted mt-2">
                        Browse listings you actually qualify for.
                    </p>
                </div>

                <div className="listing-carousel overflow-hidden">
                    <div
                        className="listing-track d-flex"
                        ref={trackRef}
                        style={{ gap: `${GAP}px` }}
                    >
                        {listings.map((item, index) => (
                            <div
                                className="listing-col"
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                            >
                                <div className="listing-card position-relative overflow-hidden rounded-4">
                                    <img
                                        src={item.img}
                                        alt="Property"
                                        className="img-fluid w-100 listing-img"
                                    />
                                    <div className="listing-overlay p-3">
                                        <h6 className="mb-1 text-white">
                                            789 River Road, Apt 5C
                                        </h6>
                                        <small className="text-white-50">
                                            Riverside District
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-dark rounded-pill px-4">
                        Explore Marketplace <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M0.75 13.25L13.25 0.75M13.25 0.75H3.875M13.25 0.75V10.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>

                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-outline-dark rounded-circle"
                            onClick={() => slide("prev")}
                            style={{ aspectRatio: "1" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                <path d="M19.6875 24.375L10.3125 15L19.6875 5.625" stroke="#32302F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button
                            className="btn btn-dark rounded-circle"
                            onClick={() => slide("next")}
                            style={{ aspectRatio: "1" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                <path d="M10.3125 24.375L19.6875 15L10.3125 5.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeListing;
