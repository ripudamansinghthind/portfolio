import React from 'react';
import '../css/Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from '../resources/Resume.pdf'
const Navbar = (props) => {
  
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-content">
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/ripudamansinghthind" target="_blank">Projects</a>
          </li>
          <li className="nav-item">
            <a href={ Resume } target="_blank" >Resume</a>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
  </nav>
  );
}

export default Navbar;