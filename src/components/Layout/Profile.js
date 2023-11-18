import { React, useEffect, useState } from 'react';
import '../css/Profile.css';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

// Icons import
import Img1 from '../Icons/FelixThindBGRem.png';
import Img2 from '../Icons/FelixThindBGRemFilm.png';
import LocationIcon from '../Icons/location.svg';

import Loader from './Loader';

const variants = {
  hidden: { opacity: 0, x: 500 },
  visible: { opacity: 1, x: 0 },
  exiting: { opacity: 0, x: 500 },
};

const images = [Img1, Img2];

function Profile() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <motion.div className="card" id="Profile">
        <motion.div
          className="profile__row"
          initial={{ x: '130%' }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          exit={{ x: '100%', opacity: 0 }}
        >
          <div className="profile__column1">
            <div className="image-cropper">
              <img className="CEO__img" src={Img2} alt="CEO dp" />
            </div>
          </div>
          <div className="profile__column2">
            <h1 className="CEO__title">FELIX THIND</h1>
            <br />
            <div className="img__cropper_text">
              <p className="img__cropper_p">
                SOFTWARE DEVELOPER | 4<sup>th</sup> Year CS
              </p>
              <br />
              <p className="img__cropper_p">SURREY, BC</p>
              <br />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Profile;
