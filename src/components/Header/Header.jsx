import './Header.css';

const Header = () => {
  return (
    <header className="header" id="home">
      <h1 className="animate-fade-in">
        I&apos;m <span>Chelsea Nanda</span>
        <br />
        Software Developer | Mobile & Full-Stack
      </h1>
      <p className="animate-fade-in-delay">
        Passionate about clean code, creative apps, and scalable systems.
        With over 2 years of experience in DevOps, Android, and full-stack
        development.
      </p>
      <div className="header-action animate-fade-in-delay-2">
        <a
          href="https://www.linkedin.com/in/chelseananda/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-connect action-button"
        >
          Connect with me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="header-resume action-button"
        >
          View Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
