import React from 'react';

import "./Circles.css";



export default function Circles() {

    let numberOfCircles = 12;
    let gridElement = document.getElementById("circles");

    function generateCircleGrid() {
        for (let i = 0; i < numberOfCircles; i++) {
            for (let j = 0; j < numberOfCircles; j++) {
                let circle = document.createElement("div");
                circle.classList.add("circle");
                circle.addEventListener("click", toggleColor);
                gridElement.appendChild(circle);
            }
        }
    }

    function toggleColor() {
        this.classList.toggle("white");
    }

    window.addEventListener("resize", function() {
        let width = gridElement.offsetWidth;
        numberOfCircles = Math.floor(12, Math.floor(width / 11));
        while (gridElement.firstChild) {
            gridElement.removeChild(gridElement.firstChild);
        }
        generateCircleGrid();
    })


    return (
        <>
            {generateCircleGrid()}
        </>  
    )
}