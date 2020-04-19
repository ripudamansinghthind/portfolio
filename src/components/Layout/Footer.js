import React from 'react';
import '../css/Footer.css'
import FbImage from '../resources/facebook.png'
import InstaImage from '../resources/instagram.png'
import LinkedInImage from '../resources/linked.png'

const Foot = (props) => {
  return (
    <div className="footer">
            <div className="social-images">
                <a href="https://www.facebook.com/profile.php?id=100006921404837" target="_blank">
                <img src={ FbImage } className="image-socials" alt = "Fb social link"/></a>
                <a href="https://www.instagram.com/rstgt/" target="_blank">
                <img src={ InstaImage } className="image-socials" alt = "Instagram social link"/></a>
                <a href="https://www.linkedin.com/in/ripudamanthind/" target="_blank">
                <img src={ LinkedInImage } className="image-socials" alt = "LinkedIn social link"/></a>
            </div>
    </div>
    );
}
    
export default Foot;