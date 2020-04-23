import React from 'react';
import '../css/Projects.css'

const Projects = (props) => {
    return (
      <div className = "Projects-body" id="Projects" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
          <div><h1>Work in progress</h1></div>
      </div>
    );
  
  }
  
  export default Projects;