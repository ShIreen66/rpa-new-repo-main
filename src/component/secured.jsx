import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../component/main.css";

gsap.registerPlugin(ScrollTrigger);

const Secured = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* REVERSED: panels expand on scroll down */
      tl.fromTo(
        leftRef.current,
        { width: "0vw" },
        { width: "50vw", ease: "none" },
        0
      )
        .fromTo(
          rightRef.current,
          { width: "0vw" },
          { width: "50vw", ease: "none" },
          0
        )
        .fromTo(
          textRef.current,
          { color: "#32302F" },
          { color: "#32302F", ease: "#32302F" },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="secure-section" ref={sectionRef}>
      {/* Panels */}
      <div className="secure-panel left flipped" ref={leftRef}></div>
      <div className="secure-panel right" ref={rightRef}></div>

      {/* Content */}
      <div className="secure-content">
        <h2 ref={textRef}>
          Access Secured.
          <br />
          <span>Your data, safely locked in.</span>
        </h2>
      </div>
    </section>
  );
};

export default Secured;
