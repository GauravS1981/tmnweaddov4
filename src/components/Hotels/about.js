import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../utils/Split3.min";
import useOnScreen from "../hooks/useOnScreen";

import "../About/style.css";

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
      className={cn("hotel-about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      Hotels. A gift given to us by the Japanese in 705 and still going strong.
      We would do anything for them...except promoting them
      when they dont follow 'price parity'...and that leaves us with what...
      5 - 7 of them? So, yes, Our first love! But if you are amongst those
      5-7 then read on...for the rest...woo us when you really need a partner!
      </p>
    </section>
  );
}
