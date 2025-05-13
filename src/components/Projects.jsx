// src/components/Projects.jsx

import React from 'react';
import carDealershipImg from '../assets/cardealership.png';
import harvestImg from '../assets/harvest.png';
import bitcoinImg from '../assets/bitcoin.png';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Car Dealership Management System',
    description:
      'A comprehensive Java-based system for managing car dealership operations including inventory, sales, and customer management.',
    technologies: 'Java • Spring Boot • MySQL',
    link: 'https://github.com/chelseananda/CarDealership',
    image: carDealershipImg,  // Use imported image here
  },
  {
    id: 2,
    title: 'Harvest Application',
    description:
      'An agricultural management system that helps farmers track crop yields, manage resources, and optimize harvesting schedules.',
    technologies: 'Kotlin • Firebase',
    link: 'https://github.com/chelseananda/HarvestApplication',
    image: harvestImg,  // Use imported image here
  },
  {
    id: 3,
    title: 'Bitcoin Price Prediction',
    description:
      'A machine learning model that predicts Bitcoin price movements using historical data and technical indicators.',
    technologies: 'Python • TensorFlow • Pandas',
    link: 'https://github.com/chelseananda/BitcoinPrediction',
    image: bitcoinImg,  // Use imported image here
  },
];

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
      {/* See More Button */}
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