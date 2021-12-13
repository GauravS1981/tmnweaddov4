import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import Navbar from "../Navbar/index";

import "./index.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Testimonies() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            
            <div className = "testimonials">
                <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} bullets={false} className = "test">
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                </AutoplaySlider>
            </div>
            <div className = "testimonials">
                <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000} bullets={false} className = "test">
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                    <div>
                        <h1>Hello</h1>
                        <p>Some random text</p>
                    </div>
                </AutoplaySlider>
            </div>
        </div>
    );
};

export default Testimonies;