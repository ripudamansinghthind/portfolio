import React from 'react';
import '../css/Footer.css'
import FbImage from '../Icons/facebook.png'
import InstaImage from '../Icons/instagram.png'
import LinkedInImage from '../Icons/linked.png'
import GitHubImage from '../Icons/github.png'
import EmailImage from '../Icons/email.png'

import { motion } from 'framer-motion'

const Foot = (props) => {
  return (
    <div className="footer">
      <div className="social-images">
        <a href="mailto:ripudamansinghthind@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={ EmailImage } className="image-socials" alt = "Email social link"/></a>
        <a href="https://www.linkedin.com/in/ripudamanthind/" target="_blank" rel="noopener noreferrer">
          <img src={ LinkedInImage } className="image-socials" alt = "LinkedIn social link"/></a>
        <a href="https://github.com/ripudamansinghthind" target="_blank" rel="noopener noreferrer">
          <img src={ GitHubImage } className="image-socials" alt = "GitHub social link"/></a>
      </div>
    </div>
    );
}
    
export default Foot;