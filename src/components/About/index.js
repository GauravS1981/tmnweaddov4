import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../utils/Split3.min";
import useOnScreen from "../hooks/useOnScreen";

import "./style.css";

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
      Our top game is to make it easy for our Travel Partners to book 'High End Hotels Worldwide'.
      Our medium game is to do this with Finesse, Subtelty & without much Hangups.
      Our low game is to do 30 push-ups in one go.
      </p>
    </section>
  );
}
