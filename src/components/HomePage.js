import React from "react";

// CSS
import "./HomePage.css";

// Components
import Header from "./Header";
import Project from "./Project";
import AboutMe from "./AboutMe";

function LandingPage(){
   return (
      <div id="page" className="is-dark">
         <Header></Header>
         
         <Project></Project>
         <AboutMe></AboutMe>  
      </div>
   );
}

export default LandingPage