import React from "react";

// CSS
import "./LandingPage.css";

// Components
import BorderMask from "./BorderMask";
import Name from "./Name";
import Project from "./Project";

function LandingPage(){
   return (
    <div id="Page" class="is-dark">
    
    <BorderMask></BorderMask>
    <Name></Name>
    <Project></Project>   
      
    </div>
   );
}

export default LandingPage