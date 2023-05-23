import React from "react"; 
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Contact;