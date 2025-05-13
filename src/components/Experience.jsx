import React from 'react';
import './Experience.css';

const experiences = [
  {
    date: 'January 2023 – April 2023',
    title: 'Junior Software Developer (Co-op)',
    company: 'Ingenico, Toronto, ON',
    bullets: [
      'Designed, developed, and enhanced internal business software systems supporting departments such as Finance, HR, Sales, and Operations.',
      'Created and modified SSRS and Power BI reports to support business decision-making and operational efficiency.',
      'Provided Level-2 support for internal CRM systems and resolved technical issues using Jira.',
      'Participated in full SDLC processes with minimal supervision.',
      'Debugged and optimized C# code and ASP.NET apps for performance and user experience.',
      'Maintained SQL Server databases with performance tuning and stored procedures.',
      'Integrated third-party tools to enhance business workflows.',
      'Collaborated cross-functionally to gather specifications and support end-user needs.',
    ],
  },
  {
    date: 'May 2022 – Jul 2022',
    title: 'Team Member, Innovation Accelerator',
    company: 'Sheridan College, Oakville, ON (Remote)',
    bullets: [
      'Collaborated with a multidisciplinary team to develop proposals addressing real-world challenges.',
      'Used human-centered design and design thinking for ideation and solution building.',
      'Conducted research to validate concepts and guide project direction.',
      'Participated in weekly stakeholder meetings and delivered final presentations.',
    ],
  },
  {
    date: 'Jan 2023 - Aug 2023',
    title: 'Technical Mentor – Apps & Entrepreneurship Program',
    company: 'Career Education Council in partnership with Apple Swift — Remote',
    bullets: [
      'Mentored high school students in Swift and Xcode during the app development lifecycle.',
      'Simplified complex programming concepts into understandable lessons.',
      'Led workshops and one-on-one sessions focused on iOS development and user experience.',
    ],
  },
  {
    date: 'Jan 2023 – Present',
    title: 'Freelance Software Developer',
    company: 'Remote – India',
    bullets: [
      'Delivered software solutions like mobile apps, websites, and automation tools.',
      'Worked with JavaScript, Python, Swift, HTML/CSS, Node.js, and SQL.',
      'Built iOS apps in Swift and Xcode and incorporated client feedback.',
      'Managed full development lifecycle and used Git, GitHub, and Jira for versioning and task tracking.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <p className="experience-date">{exp.date}</p>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
