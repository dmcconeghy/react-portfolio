import React from "react";
import "./SpecialEffects.css";

/*
* Special Effects  will contain a screen with changing designs. 
* The designs will be created using SVGs and CSS animations.
* The goal of this is to work on my CSS and JS Canvas skills. 
*/
// 

function SpecialEffects(){
   return (
    <div id="special-effects">
     {lowPolyEffect()}
    </div>
   )
}

function lowPolyEffect(){
    /************************************
    // Low-poly Background animations adapted from: https://codepen.io/Yusifalomeri/pen/PabqGO

    // Copyright (c) 2023 by Yusif Alomeri 

    // Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    // The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

************************************/

    let refreshDuration = 10000;
    let refreshTimeout;
    let numPointsX;
    let numPointsY;
    let unitWidth;
    let unitHeight;
    let points;

    function onLoad()
    {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let specialEffectsDiv = document.querySelector('#special-effects');
        svg.setAttribute('width',specialEffectsDiv.outerWidth);
        svg.setAttribute('height',specialEffectsDiv.outerHeight);
        specialEffectsDiv.appendChild(svg);

        let unitSize = (window.innerWidth+window.innerHeight)/15;
        numPointsX = Math.ceil(window.innerWidth/unitSize)+1;
        numPointsY = Math.ceil(window.innerHeight/unitSize)+1;
        unitWidth = Math.ceil(window.innerWidth/(numPointsX-1));
        unitHeight = Math.ceil(window.innerHeight/(numPointsY-1));

        points = [];

        for(let y = 0; y < numPointsY; y++) {
            for(let x = 0; x < numPointsX; x++) {
                points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
            }
        }

        randomize();

        for(let i = 0; i < points.length; i++) {
            if(points[i].originX !== unitWidth*(numPointsX-1) && points[i].originY !== unitHeight*(numPointsY-1)) {
                let topLeftX = points[i].x;
                let topLeftY = points[i].y;
                let topRightX = points[i+1].x;
                let topRightY = points[i+1].y;
                let bottomLeftX = points[i+numPointsX].x;
                let bottomLeftY = points[i+numPointsX].y;
                let bottomRightX = points[i+numPointsX+1].x;
                let bottomRightY = points[i+numPointsX+1].y;

                let rando = Math.floor(Math.random()*2);

                for(let n = 0; n < 2; n++) {
                    let polygon = document.createElementNS(svg.namespaceURI, 'polygon');

                    if(rando===0) {
                        if(n===0) {
                            polygon.point1 = i;
                            polygon.point2 = i+numPointsX;
                            polygon.point3 = i+numPointsX+1;
                            polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
                        } else if(n===1) {
                            polygon.point1 = i;
                            polygon.point2 = i+1;
                            polygon.point3 = i+numPointsX+1;
                            polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                        }
                    } else if(rando===1) {
                        if(n===0) {
                            polygon.point1 = i;
                            polygon.point2 = i+numPointsX;
                            polygon.point3 = i+1;
                            polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
                        } else if(n===1) {
                            polygon.point1 = i+numPointsX;
                            polygon.point2 = i+1;
                            polygon.point3 = i+numPointsX+1;
                            polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
                        }
                    }
                    polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/3)+')');
                    let animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
                    animate.setAttribute('fill','freeze');
                    animate.setAttribute('attributeName','points');
                    animate.setAttribute('dur',refreshDuration+'ms');
                    animate.setAttribute('calcMode','linear');
                    polygon.appendChild(animate);
                    svg.appendChild(polygon);
                }
            }
        }

        refresh();

    }

    function randomize() {
        for(var i = 0; i < points.length; i++) {
            if(points[i].originX !== 0 && points[i].originX !== unitWidth*(numPointsX-1)) {
                points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
            }
            if(points[i].originY !== 0 && points[i].originY !== unitHeight*(numPointsY-1)) {
                points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
            }
        }
    }

    function refresh() {
        randomize();
        for(var i = 0; i < document.querySelector('#special-effects svg').childNodes.length; i++) {
            var polygon = document.querySelector('#special-effects svg').childNodes[i];
            var animate = polygon.childNodes[0];
            if(animate.getAttribute('to')) {
                animate.setAttribute('from',animate.getAttribute('to'));
            }
            animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
            animate.beginElement();
        }
        refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
    }

    function onResize() {
        document.querySelector('#special-effects svg').remove();
        clearTimeout(refreshTimeout);
        onLoad();
    }

    window.onload = onLoad;
    window.onresize = onResize;

}

export default SpecialEffects