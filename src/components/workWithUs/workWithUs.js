import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/index";

import "./workWithUs.css";

function WorkWithUs() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <Navbar />
            <div className = "work_with_us">
                <div className = "work_with_us_block">
                    <div className = "work_with_us_block_data" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                    <div className = "work_with_us_block_data" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                </div>

                <div className = "work_with_us_block">
                    <div className = "work_with_us_block_data" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                    <div className = "work_with_us_block_data" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                </div>

                <div className = "work_with_us_block">
                    <div className = "work_with_us_block_data" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                    <div className = "work_with_us_block_data_last" data-aos = "fade-up">
                        <h3>Heading</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
                            enim laudantium, animi veniam libero eveniet culpa unde perferendis
                            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
                            officia. Ab, delectus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkWithUs;