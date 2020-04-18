import React from 'react';
import '../css/Experience.css'

const Experience = (props) => {
  return (
    <div class="experience-card" id="Profile">
      <div className="Experience-header">
          <h1 id = "Experience">Experience</h1>
      </div>

      <p class="title">1+ Year of Industry Experience</p>

      <h3>Junior Software Developer [Jan 2020 - April 2020]</h3>
      <p>• Developed Mobile Application Prototypes for both iOS and Android using React Native with TypeScript</p>
      <p>• Led the Development of testing the final prototypes for continuous integration</p>
      <p>• Contributed in design and dealt with feedback from daily users</p>

      <h3>Software Developer Co-op [May 2019 - Dec 2019]</h3>
      <p>• Assisted in requirement gathering, design, development and documentation for various enterprise software</p>
      <p>• Led the design and development of neural networks for species detection of wood improving the results from 56% to 94%</p>
      <p>• Did hands-on work with bioluma sensors to understand and improve how data was being collected and used for various neural networks across the company</p>
      <p>• Used OpenCV to create proper data samples for the networks</p>
      <p>• Leveraged knowledge: Git, C++, Python, Django, cntk, OpenCV</p>


      <h3>Research Assistant [Jan 2019 - April 2019]</h3>
      <p>• Upgraded the scripts being used by the professor from Perl to Python</p>
      <p>• Led the coding side of the project. Researched the best approaches that could be incorporated for accurate results low runtime</p>

      <h3>Teaching Assistant [Sept 2018 - Dec 2018]</h3>
      <p>• [Python and C#] Assisted the professor with managing evaluations of course assignments, quizzes and development of feedback</p>
      <p>• Tutored students who needed extra help outside classroom hours</p>

      <h3>Cashier [April 2018 - Jan 2019]</h3>
      <p>• Gained people skills by processing people’s transactions and providing good customer service</p>
    </div>
  );

}

export default Experience;