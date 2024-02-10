import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Projects.css';
import { motion } from 'framer-motion';

//import images
import GitHubImage from '../Icons/github.svg';
import PlayImage from '../Icons/play.svg';
import TeraImgLP from '../Icons/TeraSolutions - Landing Page.png';
import TeraLogo from '../Icons/TeraSolutions - Logo.png';
import sortingVisLP from '../Icons/sortingVis - Landing Page.png';
import sortingVisSP from '../Icons/sortingVis - Solved Page.png';
import ccdLP from '../Icons/CCD - Landing Page.png';
import ccdMP from '../Icons/CCD - Menu Page.png';
import ccdCUP from '../Icons/CCD - Contact Us Page.png';
import rnCalcLP from '../Icons/rnCalc - Landing Page.png';
import rnCalcMP from '../Icons/rnCalc - Solved Page.png';

const Projects = () => {
  const Data = [
    {
      id: '1',
      title: 'TeraSolutions.ca',
      category: 'Web Application',
      tech: ['ReactJS', 'Netlify'],
      gitHubLink: 'https://github.com/ripudamansinghthind/tera',
      liveLink: 'https://www.terasolutions.ca/',
      img: [
        {
          id: 1,
          image: TeraImgLP,
          alt: 'Landing Page - Tera Solutions',
        },
        {
          id: 2,
          image: TeraLogo,
          alt: 'Main Page - Tera Solutions',
        },
      ],
      desc: 'Logo Design, Full stack website design and development',
    },
    {
      id: '2',
      title: 'Sorting Visualizer',
      category: 'Web Application',
      tech: ['ReactJS', 'Netlify'],
      gitHubLink:
        'https://github.com/ripudamansinghthind/sorting-visualization',
      liveLink: 'https://sortingvizualizer.netlify.app/',
      img: [
        {
          id: 1,
          image: sortingVisLP,
          alt: 'Main Page - Sorting Visualizer',
        },
        {
          id: 2,
          image: sortingVisSP,
          alt: 'Solved Page - Sorting Visualizer',
        },
      ],
      desc: 'Creating using ReactJS, uses O(n^2) algorithms to solve an array presented as a graph',
    },
    {
      id: '3',
      title: 'Cafe Coffee Day',
      category: 'Web Application',
      tech: ['HTML', 'CSS', 'JS6'],
      gitHubLink: 'https://github.com/ripudamansinghthind/Website-CCD',
      liveLink: 'https://ripudamansinghthind.github.io/Website-CCD/',
      img: [
        {
          id: 1,
          image: ccdLP,
          alt: 'Landing Page - Cafe Coffee Day',
        },
        {
          id: 2,
          image: ccdMP,
          alt: 'Main Page - Cafe Coffee Day',
        },
        {
          id: 3,
          image: ccdCUP,
          alt: 'Contact Us Page - Cafe Coffee Day',
        },
      ],
      desc: 'Website Redesign proposal for a company as a class project',
    },
    {
      id: '4',
      title: 'React Native Calculator',
      category: 'Mobile Application',
      tech: ['React Native', 'Expo', 'Detox'],
      gitHubLink:
        'https://github.com/ripudamansinghthind/reactnativecalculator',
      img: [
        {
          id: 1,
          image: rnCalcLP,
          alt: 'Landing Page - Calculator',
        },
        {
          id: 2,
          image: rnCalcMP,
          alt: 'Main Page - Calculator',
        },
      ],
      desc: 'Fully functional calculator',
    },
  ];

  // const menuItems = [...new Set(Data.map((Val) => Val.category))];

  return (
    <motion.div className="card">
      {Data.map((Val) => {
        return (
          <motion.div
            className="projects-row"
            key={Val.id}
            initial={{ x: '140%' }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.1,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
            exit={{ x: '140%', opacity: 0 }}
          >
            <div className="projects-column1">
              <div className="projects_column1">
                <h2>{Val.title}</h2>
                <p>{Val.desc}</p>
                <br />
                <p>Frameworks, Libraries, Languages:</p>
                <div className="tech-skills">
                  {Val.tech.map((item) => (
                    <div className="tech-skills-text">{item}</div>
                  ))}
                </div>
              </div>
              <div className="projects_column2">
                <div className="projects__row_logos">
                  <a
                    className="projects__row_logos_a"
                    href={Val.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GitHubImage}
                      className="projects-link-image"
                      alt="GitHub social link"
                    />{' '}
                    <p className="projects-link-image_text">Source Code</p>
                  </a>
                  {Val.liveLink ? (
                    <a
                      className="projects__row_logos_a"
                      href={Val.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={PlayImage}
                        className="projects-link-image"
                        alt="GitHub social link"
                      />
                      <p className="projects-link-image_text">Live Website!</p>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="project-column2">
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={true}
                stopOnHover={true}
                transitionTime={3}
                thumbWidth={140}
                className="image-carousel"
              >
                {Val.img.map((item) => (
                  <div>
                    <img src={item.image} alt={item.alt} />
                    <p className="legend">{item.alt}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
