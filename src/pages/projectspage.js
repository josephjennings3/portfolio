import React, { Component } from 'react';
import Projects from '../components/projects';
import '../css/projectspage.css'

class ProjectsPage extends Component {
    render() {
      return (
          <div className="projects-container">
            <section className="projects-text">
              <p>Here, I proudly present, a list of the projects that has helped me grow and learn over the years. I've realized that I learn best in an environment where I can study the code, write the code, then play with the code. I find it very exciting to see just how far you can push some code until it breaks to get a full understanding of what part accomplishes what and it also helps me in debugging because I know exactly what is working correctly and what isn't. </p><br />
              <p>Throughout building this mock websites I discovered the joy in making everything pixel perfect. What started out as a task ended up becoming a puzzle game that I would gladly spend day after day on and increasing my knowledge and speed on creating, what I consider to be, artwork.</p>
            </section>
            <Projects />
          </div>
      );
    }
  }
  
  export default ProjectsPage;