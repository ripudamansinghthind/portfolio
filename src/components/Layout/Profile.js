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
          <h1>Ripudaman "Felix" Thind</h1>
          <p className="title">| Software Developer | Senior @Thompson Rivers University | Kamloops, BC |</p>
        </div>   
        <div className="column-2-card">
          <h3>Work in Progress</h3>
        </div>
      </div>
    </div>
  );

}

export default Profile;