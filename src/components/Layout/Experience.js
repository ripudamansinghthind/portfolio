import React from 'react';
import '../css/Experience.css'

const Experience = (props) => {
  return (
    <div class="experience-card" id="Profile">
      <div className="Experience-header">
          <h1 id = "Experience">Experience</h1>
          <p class="title">1+ Year of Industry Experience</p>
      </div>
      <div class="row">
        <div className="column-1">
          <h3>Junior Software Developer </h3>
          <p>Swartz Software Development (Kamloops, BC)</p>
          <p>Jan 2020 - April 2020</p>
        </div>
      <div className="column-2">
      <p>• Developed Mobile Application Prototypes for both iOS and Android using React Native with TypeScript</p>
      <p>• Led the Development of testing the final prototypes for continuous integration</p>
      <p>• Contributed in design and dealt with feedback from daily users</p>
      </div>
      </div>
      <div class="row">
        <div className="column-1">
      <h3>Software Developer Co-op</h3>
      <p>USNR (Salmon Arm)</p>
        <p>May 2019 - Dec 2019</p>
          </div>
          <div className="column-2">
          <p>• Assisted in requirement gathering, design, development and documentation for various enterprise software</p>
      <p>• Led the design and development of neural networks for species detection of wood improving the results from 56% to 94%</p>
      <p>• Did hands-on work with bioluma sensors to understand and improve how data was being collected and used for various neural networks across the company</p>
      <p>• Used OpenCV to create proper data samples for the networks</p>
      <p>• Leveraged knowledge: Git, C++, Python, Django, cntk, OpenCV</p>
          </div>
          </div>
          <div class="row">
        <div className="column-1">
        <h3>Research Assistant </h3>
        <p>TRU (Kamloops, BC)</p>
        <p>Jan 2019 - April 2019</p>
          </div>
          <div className="column-2">
          <p>• Upgraded the scripts being used by the professor from Perl to Python</p>
      <p>• Led the coding side of the project. Researched the best approaches that could be incorporated for accurate results low runtime</p>
          </div>
          </div>

          <div class="row">
        <div className="column-1">
        <h3>Teaching Assistant</h3>
        <p>TRU (Kamloops, BC)</p>
        <p>Sept 2018 - Dec 2018</p>
          </div>
          <div className="column-2">
          <p>• [Python and C#] Assisted the professor with managing evaluations of course assignments, quizzes and development of feedback</p>
      <p>• Tutored students who needed extra help outside classroom hours</p>
          </div>
          </div>

          <div class="row">
        <div className="column-1">
        <h3>Cashier</h3>
        <p>Walmart (Kamloops, BC)</p>
        <p>April 2018 - Jan 2019</p>
          </div>
          <div className="column-2">
          <p>• Gained people skills by processing people’s transactions and providing good customer service</p>
          </div>
          </div>
      </div>
  );

}

export default Experience;