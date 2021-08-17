import React from 'react';
import '../css/Profile.css'
import Img from '../resources/FelixThind.jpg';

// Icons import
import LocationIcon from '../icons/location.svg';


function Profile() {
  return (
    <>
    <div className="card" id="Profile">
      <div className="row-card">
        <div className="column-1-card">
          <div className="image-cropper">
            <img src={ Img } alt = "My portfolio pic"/>
            </div>
          <h1>Ripudaman "Felix" Thind</h1>
          <p className="title">| Software Developer | Entrepreneur | Fourth Year @TRU |</p>
          <img src={LocationIcon} className="location-img" alt='Location' />
          <p className="title">| Kamloops, BC |</p>
        </div>   
        <div className="column-2-card">
          <h5>Hey, I'm Felix and I enjoy taking on projects in video and photo editing, designing, developing, and automating related work.</h5>
          <hr className="solid"></hr>
          <p>I have a ton of different interests, follow my socials for updates</p>
          <hr className="solid"></hr>
          <p>Currently taking on web, game, video editing and mobile development contracts, Send me an email to reach</p>
        </div>
      </div>
    </div>
    </>
  );
}


export default Profile;