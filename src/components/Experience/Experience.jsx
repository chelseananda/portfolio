import './Experience.css';
import { experience } from '../../assets/experience';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company} | {exp.location}</h4>
            <h4>{exp.duration}</h4>
            <p>
              {exp.description.map((desc, i) => (
                `• ${desc}\n`
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
