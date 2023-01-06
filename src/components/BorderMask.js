import React from "react";
import "./BorderMask.css";

function BorderMask(){

    return (
    
        <div class="frame">
            <div class="frame_line frame_line_left"></div>
            <div class="frame_line frame_line_right"></div>
            <div class="frame_line frame_line_top"></div>
            <div class="frame_line frame_line_bottom"></div>

            <div class="mask" id="Mask">
                <div class="mask_top"></div>
                <div class="mask_bottom"></div>
            </div>
        </div>
    );
}

export default BorderMask