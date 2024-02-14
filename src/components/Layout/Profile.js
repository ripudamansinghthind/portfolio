import '../css/Profile.css';
import { motion } from 'framer-motion';
import Img2 from '../Icons/FelixThindBGRemFilm.png';

function Profile() {
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
              <p className="img__cropper_p">DEVELOPER @ FENA</p>
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
