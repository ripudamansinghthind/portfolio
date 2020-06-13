import React from 'react';
import '../css/Projects.css'

import GitHubImage from '../resources/github.png'
import PlayImage from '../resources/play.png'

export default class FetchGitHub extends React.Component {
  render() {
    return (
      <div className='repos'>
        <div className='card'>
          <div className="projects-header">
            <h1>&#x1F525;Projects&#x1F525;</h1>
            <p>I have many more projects that I am constantly working on hosted on my GitHub</p>
          </div>
        <div className="projects-row">
          <div className="projects-column">
            <div className = "projects-column-1">
              <h3>Sorting Algorithms Visualization</h3>
            </div>
          <div className = "projects-column-2">
            <p>The sorting visualizer only covers O(n^2) algorithms for now. I am implementing a new menu and some other algorithms soon!</p>
            <br />
            <p>Frameworks, Libraries, Languages:</p>
            <div className="tech-skills">
              <p className="tech-skills-text">ReactJS</p>
              <p className="tech-skills-text">Netlify</p>
          </div>
          <div>
            <a href="https://github.com/ripudamansinghthind/sorting-visualization" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/></a>
            <a href="https://cranky-shirley-2312fb.netlify.app/">
            <img src={ PlayImage } className="projects-link-image" alt = "GitHub social link"/></a>
          </div>
        </div>
      </div>
      <div className="projects-column">
        <div className = "projects-column-1">
            <h3>Calculator</h3>
        </div>
        <div className = "projects-column-2">
          <p>My first React Native App (TypeScript) that I made for a tech interview and successfully got the job&#x1F60E;</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">React Native</p>
            <p className="tech-skills-text">Expo</p>
            <p className="tech-skills-text">Detox</p>
          </div>
          <div>
            <a href="https://github.com/ripudamansinghthind/reactnativecalculator" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/></a>
          </div>
        </div>
        </div>
        </div>
        <div className="projects-row">
          <div className="projects-column">
            <div className = "projects-column-1">
              <h3>Pathfinding Algorithm Visualization</h3>
            </div>
            <div className = "projects-column-2">
              <p>Work in progress</p>
              <br />
              <p>Frameworks, Libraries, Languages:</p>
              <div className="tech-skills">
                <p className="tech-skills-text">Python</p>
              </div>
              <div>
                <a href="https://github.com/ripudamansinghthind/Pathfinding-Algorithm-Visualization" target="_blank" rel="noopener noreferrer">
                <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/></a>
              </div>
            </div>
          </div>
          <div className="projects-column">
            <div className = "projects-column-1">
              <h3>Portfolio Website</h3>
            </div>
            <div className = "projects-column-2">
              <p>This portfolio website hosted here &#x1F525;&#x1F525;&#x1F525;</p>
              <br />
              <p>Frameworks, Libraries, Languages:</p>
              <div className="tech-skills">
                <p className="tech-skills-text">ReactJS</p>
                <p className="tech-skills-text">Netlify</p>
              </div>
            <div>
              <a href="https://github.com/ripudamansinghthind/portfolio-website" target="_blank" rel="noopener noreferrer">
              <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
  }
}