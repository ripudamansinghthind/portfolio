import React from 'react';


// import Navbar
import Navbar from './components/Layout/Navbar.js'
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

function App() {
  return (
    <div id = "container-center" style = {{backgroundColor: "white"}}>
        <Navbar />
        <Profile/>
        <Experience />
        <Footer />
    </div>
  );
}

export default App;