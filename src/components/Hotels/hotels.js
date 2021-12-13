import React from "react";
import About from "./about";
import Body from "./body";
import Header from "./header";
import Navbar from "../Navbar/index";

function Hotels() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Body />
    </div>
  );
}

export default Hotels;