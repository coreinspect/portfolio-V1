import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container-section-title">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">What I can proud of</span>
      </div>
      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
