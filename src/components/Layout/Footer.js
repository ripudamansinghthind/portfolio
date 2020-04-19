import React from 'react';
import '../css/Footer.css'
import FbImage from '../resources/facebook.png'
import InstaImage from '../resources/instagram.png'
import LinkedInImage from '../resources/linked.png'

const Foot = (props) => {
  return (
    <div className="footer">
        <div className="Footer-heading">
            <h1>Socials</h1>
            <div className="social-images">
                <img className="image-socials" src={ FbImage } alt = "Social Fb link"/>
                <img className="image-socials" src={ InstaImage } alt = "Social Insta Link"/>
                <img className="image-socials" src={ LinkedInImage } alt = "Social LinkedIn Link"/>
            </div>
        </div>
    </div>
    );
}
    
export default Foot;