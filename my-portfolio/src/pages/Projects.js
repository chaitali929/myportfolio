import React from "react";
import '../styles/Projects.css';  // Add your styles in the next step

const Projects = () => {
  const projects = [
    { 
      name: 'Spotify Alike', 
      link: 'https://github.com/chaitali929/spotify-alike', 
      description: 'A music streaming platform that mimics Spotify, allowing users to explore and listen to music.' 
    },
    { 
      name: 'Twitter Clone', 
      link: 'https://github.com/chaitali929/Twitter-clone', 
      description: 'A social media platform clone where users can post tweets, like, retweet, and follow others.' 
    },
    { 
      name: 'Portfolio Site', 
      link: 'https://github.com/chaitali929/portfolio-site', 
      description: 'A personal portfolio website showcasing my skills, projects, and experiences.' 
    },
    { 
      name: 'UI/UX Assignment', 
      link: 'https://github.com/chaitali929/uiuxassignment', 
      description: 'An assignment project focusing on UI/UX principles for a better user experience.' 
    },
    { 
      name: 'React App', 
      link: 'https://github.com/chaitali929/react-app', 
      description: 'A simple React app that demonstrates basic functionalities and components.' 
    },
    { 
      name: 'Employee Management', 
      link: 'https://github.com/chaitali929/employee-management', 
      description: 'A web application to manage employees, including adding, updating, and deleting employee data.' 
    },
    
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2 className="project-name">{project.name}</h2>
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
