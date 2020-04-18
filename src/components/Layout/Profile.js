import React from 'react';
import '../css/Profile.css'
import Img from '../resources/Felix3.jpeg'

const Profile = (props) => {
  return (
    <div class="card" id="Profile">
    <div class="image-cropper">
      <img src={ Img } alt = "My portfolio pic"/>
      </div>
      <h1>Ripudaman Thind</h1>
      <p class="title">Software Developer</p>
      <p>4th Year Computing Science student at Thompson Rivers University</p>
      <p>I like to learn and develop the most random stuff</p>
      <p>Hit me up fren</p>
    </div>
  );

}

export default Profile;