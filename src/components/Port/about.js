import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../utils/Split3.min";
import useOnScreen from "../hooks/useOnScreen";

import "./about.css";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("home-about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam malesuada sapien felis, nec egestas tortor cursus sit amet. 
      In commodo tincidunt turpis sed venenatis. Phasellus egestas diam mauris, eget fermentum ante auctor at. 
      </p>
    </section>
  );
}