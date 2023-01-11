import React from 'react';
import { motion } from 'framer-motion';

import '../css/Studio.css';


const Studio = () => {
  return (
    <motion.div className='card'
    initial={{x: "100%"}}
    animate={{x: 0}}
    transition={{
        delay: 0.1,
        x: { duration: 1 },
        default: { ease: "linear" }
    }}
    exit={{ x: "100%", opacity: 0 }}
    >
        <div className="studio-header">
        <h1>Studio</h1>
        </div>
    </motion.div>
  )
}

export default Studio