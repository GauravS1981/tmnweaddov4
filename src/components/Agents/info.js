import React, { useEffect } from "react";
import "./info.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Body() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className = "info" data-aos="fade-up">
            <h3>Banyan Tree</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                enim laudantium, animi veniam libero eveniet culpa unde perferendis
                illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                officia. Ab, delectus.
            </p>
        </div>
    );
}

export default Body;