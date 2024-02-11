import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

//vercel
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

//particles
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import { ISourceOptions } from 'tsparticles-engine';

//import components
import { Toggle } from './components/Layout/Toggle';
import Profile from './components/Layout/Profile.js';
import NotFound from './components/Layout/NotFound.js';
import Experience from './components/Layout/Experience.js';
import Projects from './components/Layout/Projects.js';
import Blog from './components/Layout/Blog';
import Studio from './components/Layout/Studio.js';

import '../src/components/css/Navbar.css';

import Logo from './components/Icons/Logo.svg';
import LinkedInImage from '../src/components/Icons/linkedin.svg';
import GitHubImage from '../src/components/Icons/github.svg';
import EmailImage from '../src/components/Icons/mail.svg';
import Resume from '../src/components/Icons/Felix Thind - No personal.pdf';

function App() {
  //particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  //Menu
  const [toggleMenu, setToggleMenu] = useState(false);

  //Dark Mode
  const [isDark, setIsDark] = useState(true);

  //responsive screen
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //router-title
  const [pageTitle, setPageTitle] = useState('Home');

  const titleMap = [
    { path: '/', title: typewritertext() },
    { path: '/Experience', title: 'Experience' },
    { path: '/Projects', title: 'Projects' },
  ];

  function typewritertext() {
    return 'Everything! Everyone! Everywhere!';
  }

  const curLoc = useLocation();

  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  //router-dom
  const location = useLocation();
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Analytics />
      <SpeedInsights />
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <div className="navbar-grid">
        {(toggleMenu || screenWidth > 768) && (
          <motion.nav className="navbar" id="navbar">
            <div className="nav-content">
              <div className="logo-border">
                <Link to="/">
                  <motion.img
                    onClick={toggleNav}
                    src={Logo}
                    className={`logo-img ${isDark ? 'invert-color' : ''}`}
                    alt="Logo"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0,
                      x: { duration: 1 },
                      default: { ease: 'linear' },
                    }}
                  />
                </Link>
              </div>
              <ul className="nav-items">
                <NavLink to="/Experience">
                  <motion.li
                    className="nav-item"
                    onClick={toggleNav}
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.5,
                      x: { duration: 1 },
                      default: { ease: 'linear' },
                    }}
                  >
                    EXPERIENCE
                  </motion.li>
                </NavLink>
                <NavLink to="/Projects">
                  <motion.li
                    className="nav-item"
                    onClick={toggleNav}
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 1,
                      x: { duration: 1 },
                      default: { ease: 'linear' },
                    }}
                  >
                    PROJECTS
                  </motion.li>
                </NavLink>
              </ul>
            </div>
          </motion.nav>
        )}
        <motion.button
          className="toggleButton"
          initial={{ x: -450 }}
          animate={{ x: 0 }}
          onClick={toggleNav}
        ></motion.button>
      </div>
      <div className="header-grid">
        <motion.div
          className="header"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.1,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          exit={{ x: '100%', opacity: 0 }}
        >
          <div className="typewriter">
            <h5 className="page-title">{pageTitle}</h5>
          </div>
        </motion.div>
      </div>
      <div className="app-body">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Profile />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Studio" element={<Studio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>

      <motion.div
        className="nav__footer__row"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          delay: 2.5,
          x: { duration: 1 },
          default: { ease: 'linear' },
        }}
      >
        <li className="resumeButton">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <motion.div className="clickyButton">VIEW MY CV</motion.div>
          </a>
        </li>
      </motion.div>
      <motion.div className="footer">
        <div className="footer__row">
          <motion.div
            className="nav__footer__row2"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              delay: 3,
              duration: 2,
              type: 'spring',
              bounce: 0.6,
            }}
          >
            <p className="footer_text">CONNECT WITH ME</p>
            <motion.div
              className="social-images"
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                delay: 4.5,
                duration: 2,
                type: 'spring',
                bounce: 0.6,
              }}
            >
              <a
                href="mailto:ripudamansinghthind@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={EmailImage}
                  className={`image-socials_mail ${isDark ? 'invert-color' : ''}`}
                  alt="Email social link"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    delay: 4.5,
                    duration: 4,
                    type: 'spring',
                    bounce: 0.8,
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ripudamanthind/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={LinkedInImage}
                  className={`image-socials_linkedin ${isDark ? 'invert-color' : ''}`}
                  alt="LinkedIn social link"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    delay: 4.5,
                    duration: 4,
                    type: 'spring',
                    bounce: 0.8,
                  }}
                />
              </a>
              <a
                href="https://github.com/ripudamansinghthind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={GitHubImage}
                  className={`image-socials_github ${isDark ? 'invert-color' : ''}`}
                  alt="GitHub social link"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    delay: 4.5,
                    duration: 4,
                    type: 'spring',
                    bounce: 0.8,
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
          <div className="bottom-right-icons">
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
              icons={{ checked: '🌙', unchecked: '🔆' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
