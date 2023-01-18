import React, { useState } from "react";
import "./ProjectsMenu.css";

function ProjectsMenu() {
  
        const [isVisible, setIsVisible] = useState(false);

        function handleClick(e) {
            e.preventDefault();
          // setIsVisible(!isVisible);
          // Disabled for now, as it's not working as expected.
        }
      
        return (
          <>
            <a href="/" onClick={handleClick}>
              <h3>PROJECTS</h3>
            </a>
            {isVisible && (
              <div id="projects-menu-list">
                <div className="project-link">ProjectRS</div>              
                <div className="project-link">FlashBack</div>              
                <div className="project-link">BookShelf</div>              
                <div className="project-link">BirdList</div>             
                <div className="project-link">NJO Quilts</div>               
                <div className="project-link">Captain Emil</div>
                <div className="project-link">Games</div>          
                <div className="project-link">Snippets</div>
              </div>           
            )}
          </>
        );

        // onMouseOver={() => {
        //     this.style.overflow = 'auto';
        // }} onMouseOut={() => {
        //   this.style.overflow = 'hidden';
        // }}
      };

export default ProjectsMenu;