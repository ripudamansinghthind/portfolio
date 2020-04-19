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
    </div>
  );

}

export default Profile;