import logo from './logo.png';
import React, { Component } from 'react';

//import lazy hero bar
import LazyHero from 'react-lazy-hero'

// import rc-footer
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

//import Navbar
import Navbar from './Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function scroll () {
    console.log("Hello");
  }
  return (
    <div id = "container-center" style = {{backgroundColor: "white"}}>
      <Navbar />
    <div id="intro"> 
      <LazyHero className="experience-para"
                        minHeight="90vh"
                        color="black"
                        opacity={0.3}>
                            <h1>Hey, I'm Felix</h1>
                            <p>or <b>Ripudaman</b> but lets be real Felix is easier</p>
                            </LazyHero>
    </div>
    <div id="experience">
    <LazyHero className="experience-para"
                        minHeight="90vh"
                        color="black"
                        opacity={0.3}>
                            <h1>Experience</h1>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
    <div><h1>Cashier -></h1>{"\n"}<p>Walmart</p></div>
    <div><h1>Teaching Assistant -></h1>{"\n"}<p>Thompson Rivers University</p></div>
    <div><h1>Research Assistant -></h1>{"\n"}<p>Thompson Rivers University</p></div>
    <div><h1>Software Developer Co-op</h1> -> {"\n"}<p>USNR</p></div>
    <div><h1>Software Developer</h1>{"\n"}<p>Swartz Software Development</p></div>
  </div>
    </LazyHero>
    </div>
    <div id="#random-shit">
    <LazyHero className="random-para"
                        minHeight="10vh"
                        color="black"
                        opacity={0.3}>
                            <h1  onClick= {scroll}>^</h1>
                    </LazyHero>
    </div>
    <div id="#footer">
    <Footer
    columns={[
      {
        title: 'Say Hello?',
        openExternal: true,
        items: [
          {
            title: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=100006921404837',
            openExternal: true,
          },
          {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ripudamanthind/',
            openExternal: true,
          },
          {
            title: 'GitHub',
            url: 'https://github.com/ripudamansinghthind',
            openExternal: true,
          },
        ],
      },
    ]}
    bottom="I really didn't need a footer but it looks cool so here it stays"
  />
    </div>
    </div>
  );
}

export default App;