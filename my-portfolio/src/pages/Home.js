import React from "react";
import '../styles/Home.css';  // The styles will be added in the next step
// Assuming you've added your photo in the 'assets' folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="home-title">Hello, I'm Chaitali</h1>
        <p className="home-description">
          I'm a passionate MERN Stack developer with expertise in React.js, Node.js, Express, and MongoDB. 
          I love building dynamic, user-friendly web applications. I'm always eager to learn and grow, 
          focusing on developing creative and scalable solutions.
        </p>
        <p className="additional-info">
          Age: 22 <br />
          Location: Kalyan, Mumbai <br />
          
        </p>
      </div>
      <div className="right-section">
      <img src={process.env.PUBLIC_URL + '/assets/chaitu.jpg'} alt="Your Name" className="home-photo" />
      </div>
    </div>
  );
};

export default Home;
