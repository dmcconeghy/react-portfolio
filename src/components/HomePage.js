import React from "react";

// CSS
import "./HomePage.css";

// Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function LandingPage(){
   return (
      <div id="page" className="is-dark">
         <Header></Header>
         
         <Main></Main>
         
         <Footer></Footer>
        
      </div>
   );
}

export default LandingPage