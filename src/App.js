import React from 'react';
import logo from './logo.png';

function App() {
  return (
    <div className="container center">
    <div id="intro">
    <h3>Hi, I am Felix and I love time</h3>    
    </div>
    <div id="circle">
            <div className="circle__topleft">
            <h4>ABOUT ME</h4>
            </div>
            <div className="circle__topright">
            <h4>PROJECTS</h4>
            </div>
            <div className="circle__botleft">
            <h4>SOMETHING</h4>
            </div>
            <div className="circle__botright">
              <h4>CONTACT ME</h4>
            </div>
            </div>
    </div>
  );
}

export default App;
