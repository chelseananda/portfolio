// src/components/Projects.jsx

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data'; // 👈 NEW
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-aos="fade-up">
        My Projects
      </h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="overlay">
              <a
                href={project.link}
                className="overlay-content"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="overlay-icon" />
                <span>View Code</span>
              </a>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-container" data-aos="fade-up">
        <a
          href="https://github.com/chelseananda"
          target="_blank"
          rel="noopener noreferrer"
          className="see-more-button"
        >
          See More →
        </a>
      </div>
    </section>
  );
};

export default Projects;
