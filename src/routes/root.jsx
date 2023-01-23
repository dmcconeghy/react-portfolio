import React from 'react';


// CSS
import "../css/HomePage.css";
import "../css/Root.css";

// Components
import BorderMask from "../components/BorderMask";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
        <BorderMask></BorderMask>        
        <div id="page" className="is-dark">
         <Header></Header>
         
         <Main></Main>
         
         <Footer></Footer>
        
      </div>
   
    </>
  );
}