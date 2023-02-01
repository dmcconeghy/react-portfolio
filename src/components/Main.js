import React from "react";
import "./Main.css";

import SpecialEffects from "./SpecialEffects";
import Circles from "./Circles";

function Main() {
    return (
        <>
            <div id="main">
                <SpecialEffects></SpecialEffects>
                
                
            </div>
            <div id="circles">
            <Circles></Circles>
            </div>
        </>
    )
}

export default Main;