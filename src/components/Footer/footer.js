import React from "react";
import './footer.css';

function Footer() {
    return (
        <div>
            <div className = "footer">
                <div className = "footer-top">
                    <h1>We're social, so if you'd like to talk, get in touch</h1>
                </div>
                <div className = "footer-mid">
                    <div className = "footer-mid-first"><h3>Email</h3></div>
                    <div className = "footer-mid-second"><h3>+91 971 198 3158</h3></div>
                    <div className = "footer-mid-third"><h3>Find us</h3></div>
                    <div className = "footer-mid-fourth"><h3>Youtube</h3></div>
                </div>
                <div className = "footer-bottom"><p>© 2021 Luxury Living</p></div>
            </div>
            <div className = "footer-space"></div>
        </div>
    );
}

export default Footer;