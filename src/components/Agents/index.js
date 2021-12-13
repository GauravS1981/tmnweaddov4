import React from "react";
import Navbar from "../Navbar";
import Best from "./best";
import Card from "./card";
import Header from "./header";
import Info from "./info";
import Links from "./links";
import "./style.css";
import Video from "./video";

function Agents() {
    return (
        <div className = "agents">
            <Navbar />
            <Header />
            <Links />
            <Best />
            <Card />
            <Info />
            <Video />
        </div>
    );
}

export default Agents;