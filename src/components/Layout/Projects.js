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
            <h1>Projects</h1>
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
          <p>React Native calculator made with created with TypeScript</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">React Native</p>
            <p className="tech-skills-text">TypeScript</p>
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
              <p>This portfolio website hosted here</p>
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
            <div className="projects-row">
          <div className="projects-column">
            <div className = "projects-column-1">
              <h3>Weather API</h3>
            </div>
          <div className = "projects-column-2">
            <p>React App working with an online weather api</p>
            <br />
            <p>Frameworks, Libraries, Languages:</p>
            <div className="tech-skills">
              <p className="tech-skills-text">ReactJS</p>
              <p className="tech-skills-text">Netlify</p>
            </div>
          <div>
            <a href="https://github.com/ripudamansinghthind/weather-api" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/></a>
            <a href="https://unruffled-heyrovsky-37c689.netlify.app/">
            <img src={ PlayImage } className="projects-link-image" alt = "GitHub social link"/></a>
          </div>
        </div>
      </div>
      <div className="projects-column">
        <div className = "projects-column-1">
            <h3>Dystopia (Video Game)</h3>
        </div>
        <div className = "projects-column-2">
          <p>My summer project for 2021. A video game that I directed, designed and developed. Project Under Development</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">C#</p>
            <p className="tech-skills-text">Unity</p>
            <p className="tech-skills-text">Blender</p>
          </div>
          <div>
            <a href="https://github.com/ripudamansinghthind/dystopia-game" target="_blank" rel="noopener noreferrer">
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