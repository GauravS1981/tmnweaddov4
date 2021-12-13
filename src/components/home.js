import React from "react";
import Header from "./Header";
import About from "./About";
import Navbar from "./Navbar/index";
import Body from "./Description";
import Decision1 from "./Decision/decision1";
import Contact from "./Contact/contact";
import Decision2 from "./Decision/decision2";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            {/* <Decision1 />
            <Decision2 /> */}
            <Body />
        </div>
    );
}

export default Home;