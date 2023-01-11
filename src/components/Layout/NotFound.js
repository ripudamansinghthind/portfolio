import React from 'react'
import '../css/NotFound.css'

const NotFound = () => {
  return (
    <div className='card'>
      <div className='row-card'>
        <h3 className='title'>Uh oh! Something went wrong.</h3>
      </div>
      <div className='row-card'>
        <h5 className='message'>Error: 404, Page not Found! Click on another working link to proceed.</h5>
      </div>
    </div>
  )
}

export default NotFound