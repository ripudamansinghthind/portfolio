import React from 'react';
import '../css/Profile.css'
import Img from '../resources/FelixThind.jpg'

const Profile = (props) => {
  return (
    <div class="card" id="Profile">
      <div class="row-card">
        <div className="column-1-card">
          <div class="image-cropper">
            <img src={ Img } alt = "My portfolio pic"/>
            </div>
          <h1>Ripudaman Thind</h1>
          <p class="title">Software Developer | Student | Thompson Rivers University</p>
        </div>   
        <div className="column-2-card">
          <h1>Who I am?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );

}

export default Profile;