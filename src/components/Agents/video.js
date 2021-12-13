import React, { useEffect } from "react";
import "./video.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Video() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div class="video-row">
            <div class="video-first" data-aos="fade-right"></div>
            <div class="video-mid"></div>
            <div class="video-second" data-aos="fade-left"></div>
        </div>
    );
}

export default Video;