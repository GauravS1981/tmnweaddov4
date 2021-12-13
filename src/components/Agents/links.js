import React, { useEffect } from "react";
import "./links.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Links() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div class="links-row">
            <div class="col" data-aos="fade-right"><a href="/portfolio">Portfolio</a></div>
            <div class="col" data-aos="fade-up"><a href="/testimonies">Testimonies</a></div>
            <div class="col" data-aos="fade-left"><a href="/workwithus">Why work with us</a></div>
        </div>
    );
}

export default Links;