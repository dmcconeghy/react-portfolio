import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
    return (
        <div id="footer">
            <div className="footer-item">
               <Link to={'about'}><h3>ABOUT ME</h3></Link>            
            </div>
            <div className="footer-item">
                <Link to={'contact'}><h3>CONTACT</h3></Link>
               
            </div>
            <div className="footer-item">
                <Link to={'projects'}><h3>PROJECTS</h3></Link>
                
            </div>            
        </div>
    );
}

export default Footer;