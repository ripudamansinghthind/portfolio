import React from 'react';
// import Navbar
// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Profile component
import Profile from './components/Layout/Profile.js'
// import Experience component
import Experience from './components/Layout/Experience.js'
// import Projects component
import Projects from './components/Layout/Projects.js'
// import Footer component
import Footer from './components/Layout/Footer'


import './components/css/Navbar.css'
import Resume from './components/resources/Resume.pdf'
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
            <Link to="/">Profile</Link>
          </li>
        <li className="nav-item">
            <Link to="/Experience">Experience</Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/ripudamansinghthind" target="_blank">Projects</a>
          </li>
          <li className="nav-item">
            <a href={ Resume } target="_blank" >Resume</a>
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
          </Switch>
  </Router>
  <Footer />
    </div>
  );
}

export default App;