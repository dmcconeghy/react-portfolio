import React from "react";
import "./BorderMask.css";

function BorderMask(){

    return (
    
        <div className="frame">
            <div className="frame_line frame_line_left"></div>
            <div className="frame_line frame_line_right"></div>
            <div className="frame_line frame_line_top"></div>
            <div className="frame_line frame_line_bottom"></div>

            <div className="mask" id="Mask">
                <div className="mask_top"></div>
                <div className="mask_bottom"></div>
            </div>
        </div>
    );
}

export default BorderMask