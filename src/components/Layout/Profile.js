import React from 'react';
import '../css/Profile.css'
import Img from '../resources/FelixThind.jpg'

const Profile = (props) => {
  return (
    <div class="card" id="Profile">
    <div class="image-cropper">
      <img src={ Img } alt = "My portfolio pic"/>
      </div>
      <h1>Ripudaman Thind</h1>
      <p class="title">Software Developer | Student | Thompson Rivers University</p>
      <p>4th Year student at TRU in Kamloops, BC</p>
      <p>I like to learn and develop the most random stuff</p>
      <p>Hit me up fren</p>
    </div>
  );

}

export default Profile;