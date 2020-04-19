import React from 'react';
import '../css/Profile.css'
import Img from '../resources/FelixThind.jpg'

const Profile = (props) => {
  return (
    <div className="card" id="Profile">
      <div className="row-card">
        <div className="column-1-card">
          <div className="image-cropper">
            <img src={ Img } alt = "My portfolio pic"/>
            </div>
          <h1>Ripudaman Thind</h1>
          <p className="title">Software Developer | Student | Thompson Rivers University</p>
        </div>   
        <div className="column-2-card">
          <h1>Nice to meet you!</h1>
          <p>Friends call me Rip or Felix, cuz saying Ripudaman is a bit hard</p>
          <p>I am a 4th year Bachelor of Computer Science student at TRU in Kamloops, BC.</p>
          <p>Well, you can visit the other links I have on here to know more about me</p>
          <p>I love talking about projects, your projects, my projects, all projects so hit me up on my socials and we can discuss whatever you want to discuss</p>
        </div>
      </div>
    </div>
  );

}

export default Profile;