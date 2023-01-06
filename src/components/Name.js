import React from 'react';
import './Name.css';

function Name() {
    return(
        <>
            <p>
            Full Stack Developer and Educator
            </p>
        <a
            className="Resume-link"
            href="/about"
            target="_self"
            rel="noopener noreferrer"
        >
        About Me
        </a> 
    </>);
}

export default Name;