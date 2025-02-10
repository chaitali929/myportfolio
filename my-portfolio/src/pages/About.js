import React from "react";
import '../styles/About.css';  // Add your styles in the next step

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <div className="about-education">
          <h2 className="section-title">Education</h2>
          <div className="education-container">
            <ul className="education-list">
              <li><strong>10th Standard:</strong> Welfare High School</li>
              <li><strong>12th Standard:</strong> Bhavans Hazarimal Somani College, Grant Road</li>
              <li><strong>Bachelor's Degree:</strong> Bachelors of Computer Engineering, Dilkap Research Institute of Engineering and Management Studies, Neral</li>
            </ul>
          </div>
        </div>

        <div className="about-skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <ul className="skills-list">
              <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>JavaScript</li>
              <li>HTML, CSS</li>
              <li>React.js & React Native</li>
              <li>MySQL, MongoDB</li>
              <li>Python</li>
              <li>API Development</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>

        {/* New Certificates Section */}
        <div className="about-certificates">
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-container">
            <ul className="certificates-list">
              <li><strong>React.js Certification:</strong> Internshala</li>
              <li><strong>Python Full Stack Development:</strong> Think Works</li>
              <li><strong>AWS Training Certification:</strong> Internshala</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
