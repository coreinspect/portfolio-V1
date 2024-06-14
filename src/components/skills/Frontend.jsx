import "./skills.css";
const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Skills</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">Tailwind and Bootstrap</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
