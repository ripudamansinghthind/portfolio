import React from 'react';
// import Navbar
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Profile component
import Profile from './components/Layout/Profile.js';
// import Experience component
import Experience from './components/Layout/Experience.js';
// import Projects component
import FetchGitHub from './components/Layout/FetchGitHub.js'
// import Footer component
import Footer from './components/Layout/Footer'
//import Resume component
// import Resume from './components/Layout/Resume'
import Resume from './components/resources/Resume.pdf'


import './components/css/Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div id = "container-center" style = {{backgroundColor: "white"}}>
      <Router>
    <nav className="navbar" id="navbar">
      <div className="nav-content">
        <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">
              <div className="clickyButton">Profile
              </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Experience">
              <div className="clickyButton">Experience
              </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects">
              <div className="clickyButton">Projects
              </div>
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/Resume">
                  <div className="clickyButton">Resume</div>
                </Link> */}
                <a href={ Resume } target="_blank" rel="noopener noreferrer">
              <div className="clickyButton">Resume
              </div></a>
            </li>
        </ul>
      </div>
  </nav>
    <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route path="/Experience">
              <Experience />
            </Route>
            <Route path="/Projects">
              <FetchGitHub />
            </Route>
            {/* <Route path="/Resume">
              <Resume />
            </Route> */}
          </Switch>
  </Router>
  <Footer />
    </div>
  );
}

export default App;