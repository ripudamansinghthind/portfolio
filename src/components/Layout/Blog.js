import React from 'react';
import { motion } from 'framer-motion';

import '../css/Blog.css';

const Blog = () => {
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
      <div className="blog_header">
      <h1>Blog</h1>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3 className='experience-column-1_text'>Web Developer</h3>
          <a href="https://www.thindcreatives.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">Thind Creatives Ltd.</a>
          <p>Jan 2022 - Currently Employed</p>
        </div>
        <div className="experience-column-2">
        <p>• Designed and developer 20+ front-end and back-end applications utilizing React.js, Node.js and TypeScript</p>
        <p>• Played a key role working with stakeholders to design complex solutions, led from inception to production</p>
        <p>• Worked on multiple original development projects including e-commerce websites, web applications and desktop software, encompassing design, coding, testing and maintenance whilst managing 95% client satisfaction</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Blog