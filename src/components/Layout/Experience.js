import React from 'react';
import '../css/Experience.css'

const Experience = (props) => {
  return (
    <div className="card" id="Profile">
      <div className="Experience-header">
          <h1 id = "Experience">Experience</h1>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3>Junior Software Developer </h3>
          <a href="https://swartz.dev/" className="company-website-experience" target="_blank" rel="noopener noreferrer">Swartz Software Development (Kamloops, BC)</a>
          <p>Jan 2020 - April 2020</p>
        </div>
      <div className="experience-column-2">
      <p>• Developed Mobile Application Prototypes for a Fitness Trainer App providing coaches the ability to manage their clients efficiently for both iOS and Android using React Native, TypeScript & ESlint</p>
      <p>• Led the Development of testing the final prototypes for continuous integration</p>
      <p>• Contributed in design and dealt with feedback from daily users </p>
      </div>
      </div>
      <div className="row">
        <div className="experience-column-1">
      <h3>Software Developer Co-op</h3>
      <a href="https://www.usnr.com/en/page/home" className="company-website-experience" target="_blank" rel="noopener noreferrer">USNR (Salmon Arm, BC)</a>
        <p>May 2019 - Dec 2019</p>
          </div>
          <div className="experience-column-2">
          <p>• Led the design and development of neural networks for species detection of wood improving the results from 56% to 94%</p>
          <p>• Assisted in requirement gathering, design, development, and documentation for various AI projects using cntk (Python) to further enhance the defect detection products in the forestry industry</p>
          <p>• Did hands-on work with bioluma sensors to understand and improve how data was being collected and used for various neural networks across the company</p>
          </div>
          </div>
          <div className="row">
        <div className="experience-column-1">
        <h3>Research Assistant </h3>
        <a href="https://tru.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">TRU (Kamloops, BC)</a>
        <p>Jan 2019 - April 2019</p>
          </div>
          <div className="experience-column-2">
          <p>• Upgraded basic biology scripts like DNA to RNA conversion and vice versa being used by the professor from Perl to Python</p>
          <p>• Led the coding side of the project. Researched the best approaches that could be incorporated for accurate results with low runtimes</p>
          </div>
          </div>

          <div className="row">
            <div className="experience-column-1">
              <h3>Teaching Assistant</h3>
              <a href="https://tru.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">TRU (Kamloops, BC)</a>
              <p>Sept 2018 - Dec 2018</p>
            </div>
            <div className="experience-column-2">
              <p>• [Python and C#] Assisted the professor with managing evaluations of course assignments, quizzes and development of feedback</p>
              <p>• Tutored students who needed extra help outside classroom hours</p>
            </div>
          </div>

          <div className="row">
            <div className="experience-column-1">
              <h3>Cashier</h3>
              <a href="https://www.walmart.ca/en" className="company-website-experience" target="_blank" rel="noopener noreferrer">Walmart (Kamloops, BC)</a>
              <p>April 2018 - Jan 2019</p>
            </div>
            <div className="experience-column-2">
              <p>• Gained people skills by processing people’s transactions and providing good customer service</p>
              </div>
          </div>
      </div>
  );

}

export default Experience;