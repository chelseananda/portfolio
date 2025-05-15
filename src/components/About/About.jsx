import './About.css';
import python from '../../assets/python.svg';
import csharp from '../../assets/csharp.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/javascript.svg';
import kotlin from '../../assets/kotlin.svg';
import git from '../../assets/git.svg';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" className="theme-pattern" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I'm <span className="highlight">Chelsea Nanda</span>, a motivated and
              detail-oriented software developer with a passion for creating efficient,
              scalable solutions.
            </p>
            <p>
              I specialize in <span className="highlight">full-stack development</span>,
              with expertise in <span className="highlight">React</span>,{' '}
              <span className="highlight">Node.js</span>, and{' '}
              <span className="highlight">mobile development</span>. I've worked on
              various projects using <span className="highlight">Python</span>,{' '}
              <span className="highlight">C#</span>, <span className="highlight">Java</span>,{' '}
              <span className="highlight">JavaScript</span>, and{' '}
              <span className="highlight">Kotlin</span> through internships and research projects.
            </p>
            <p>
              I'm passionate about building responsive apps and back-end systems. Feel free to
              connect — I'd love to talk tech, projects, or hackathons!
            </p>
          </div>
          <div className="about-languages">
            <div className="language-icon">
              <img src={python} alt="Python" />
              <span>Python</span>
            </div>
            <div className="language-icon">
              <img src={csharp} alt="C#" />
              <span>C#</span>
            </div>
            <div className="language-icon">
              <img src={java} alt="Java" />
              <span>Java</span>
            </div>
            <div className="language-icon">
              <img src={javascript} alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="language-icon">
              <img src={kotlin} alt="Kotlin" />
              <span>Kotlin</span>
            </div>
            <div className="language-icon">
              <img src={git} alt="Git" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
