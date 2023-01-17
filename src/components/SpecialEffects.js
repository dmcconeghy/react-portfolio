import React from "react";
import "./SpecialEffects.css";

const particles = document.getElementById("particles");
const border = ["50%", "0%"];
const colors = ["#FF6B6B", "#FFE66D", "#4472CA"];

window.addEventListener("resize", makeParticles);
window.addEventListener("load", makeParticles);

function SpecialEffects(){
   return (
    <>
        <div class="blur"></div>
        <div class="main" id="main">
            <h1 class="title">PROJECTS</h1>
        </div>
        <div class="particles" id="particles"></div>
    </>
   );
}

function makeParticles(event) {

    getParticles();
    particles.addEventListener("click", createParticle);
}
    
    

function createParticle(event){
    var x = event.clientX;
    var y = event.clientY;
    var color = Math.floor(Math.random() * 3);

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.marginLeft = x+"px";
    div.style.marginTop = y+"px";
    div.style.width = "10px";
    div.style.borderTop = "5px solid transparent";
    div.style.borderRight = "5px solid transparent";
    div.style.borderLeft = "5px solid transparent";
    div.style.borderBottom = "10px solid "+colors[color];
    div.style.animation = "move 5s ease-in infinite";
    particles.appendChild(div);
    setTimeout(
        function(){
            div.remove();
        }
    , 5000);
}

function getParticles(){
    var np = document.documentElement.clientWidth / 40;
    particles.innerHTML = "";
    for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w ) + 1;
        var rndh = Math.floor(Math.random() * h ) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 5;
        var opty = Math.floor(Math.random() * 4) + 1;
        var anima = Math.floor(Math.random() * 12) + 8;
        var bdr = Math.floor(Math.random() * 2);
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.width = widthpt+"px";
        div.style.height = widthpt+"px";
        div.style.opacity = opty;
        div.style.backgroundColor = colors[color];
        div.style.borderRadius = border[bdr];
        div.style.animation = "move "+anima+"s ease-in infinite";
        particles.appendChild(div);
    }
}




export default SpecialEffects