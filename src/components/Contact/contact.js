import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className = "contact">
            <div><i className = "fa fa-whatsapp fa-2x" style = {{color: 'white'}}></i></div>
            <div><i className = "fa fa-instagram fa-2x" style = {{color: 'white'}}></i></div>
            <div><i className = "fa fa-facebook fa-2x" style = {{color: 'white'}}></i></div>
        </div>
    );
}

export default Contact;