import React from "react";
import ProjectsMenu from "./ProjectsMenu";

import "./Footer.css";

function Footer() {
    return (
        <div id="footer">
            <div className="footer-item">
                <a href="/"><h3>ABOUT ME</h3> </a>            
            </div>
            <div className="footer-item">
               <a href="/"><h3>CONTACT</h3></a>
            </div>
            <div className="footer-item">
                <ProjectsMenu></ProjectsMenu>
            </div>            
        </div>
    );
}

export default Footer;