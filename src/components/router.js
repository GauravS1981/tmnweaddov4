import React from "react";
import Home from "./home";
import Hotels from "../components/Hotels/hotels";
import Port from "./Port/port";
import Agents from "./Agents";

import "./router.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkWithUs from "./workWithUs/workWithUs";
import Testimonies from "./Testimonies/index";

function Rter() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                <div className="wrapper">
                    <div className="home">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/hotels" component={Hotels} />
                        <Route exact path="/portfolio" component={Port} />
                        <Route exact path="/agents" component={Agents} />
                        <Route exact path="/workwithus" component={WorkWithUs} />
                        <Route exact path="/testimonies" component={Testimonies} />
                    </Switch>
                    </div>
                </div>
                </div>
            </div>
        </Router>
    );
}

export default Rter;