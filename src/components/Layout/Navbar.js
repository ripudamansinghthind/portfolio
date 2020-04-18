import React from 'react';
import '../css/Navbar.css'

const Navbar = (props) => {
  
  return (
    <div className="navbar">
        <a className="active" href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
    </div>
  );
}

export default Navbar;