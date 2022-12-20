import React from "react";
import "./LandingPage.css";

function LandingPage(){
   return (
    <div id="Page" class="is-dark">
         <div class="mask" id="Mask">
            <div class="mask_top"></div>
            <div class="mask_bottom"></div>
        </div>
        <div class="frame">
            <div class="frame_line frame_line_left"></div>
            <div class="frame_line frame_line_right"></div>
            <div class="frame_line frame_line_top"></div>
            <div class="frame_line frame_line_bottom"></div>
        </div>

        <p>
        Full Stack Developer and Educator
        </p>
        <a
            className="Resume-link"
            href="/about"
            target="_self"
            rel="noopener noreferrer"
        >
        About Me
        </a>    
      
    </div>
   );
}

export default LandingPage