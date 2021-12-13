import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './card.css';

import Aos from "aos";
import "aos/dist/aos.css";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

function Card() {
    const options = {
        scale: 1,
        speed: 2000,
        max: 15,
        transition: true,
    };

    return (
        <Tilt className="box" data-aos="fade-up" options={options} />
    );
}

export default Card;