import "../assets/stylesheets/about.css";
const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-section">
        <h1 className="about-problem">
          <span className="typewriter typewriter--1">What is a Hack Club?</span>
        </h1>
        <p className="about-statement">
          The Hack Club is a non-profit global network of young makers and
          student-led programming clubs where young people create projects and
          thrive to think big and make an impact with technology around the
          world.
        </p>
      </div>
      <div className="about-section">
        <h1 className="about-problem">
          <span className="typewriter typewriter--2">We at Hack Club NITRR! 🚀</span>
        </h1>
        <p className="about-statement">
          Hack Club NITRR is a community where students from different branches
          and domains can come together and tinker with various new and upcoming
          techs. We aim to spread technical awareness among students who are new
          to this field and are confused about where to start.
        </p>
      </div>
    </div>
  );
};

export default About;
