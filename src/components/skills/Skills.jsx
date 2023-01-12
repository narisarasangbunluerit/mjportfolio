import React from "react";
import { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Knowledge</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div>
            <i className="uil uil-swatchbook skills__icon"></i>
            <h3 className="skills__title">
              UX/UI <br /> Design{" "}
            </h3>
          </div>

          <span className="skills__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">UX/UI Design</h3>
              <p className="skills__modal-description">
                {/* narisara sangbunluerit */}
              </p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Design Thinking Process</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    User Research, Stakeholder Interviews, Online Survey,
                    Questionnaire, Contextual Inquiry, Interview, Observation
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Persona, User Journey Map, User Scenario, User Flow Diagram,
                    Hierarchical Task Analysis, Empathy Map, Storyboard,
                    Comparative Analysis
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Information Arcthitecture, Interaction Design, Visual
                    Interface Design, UX Writing
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Wireframe(low-fidelity), Mockup(High-fidelity), Prototype
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    ​Usability Testing, ​Cognitive Walkthrough, Heuristic
                    Evaluation, Guerrilla Testing, Remote Testing, System
                    Usability Scale
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <div>
            <i className="uil uil-brackets-curly skills__icon"></i>
            <h3 className="skills__title">
              Tools & <br /> Programming{" "}
            </h3>
          </div>

          <span className="skills__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">Tools & Programming</h3>
              <p className="skills__modal-description"></p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Figma, Adobe XD</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    CSS, HTML, JavaScript, Tailwind CSS, Bootstrap, React, APIs
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Maze, Useberry</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Adobe Photoshop, Adobe Illustrator
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Canva, Figjam, Lucidchart
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Jira, Trello</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <div>
            <i className="uil uil-web-grid skills__icon"></i>
            <h3 className="skills__title">
              Soft <br /> Skills{" "}
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="skills__button">
            View more
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">Soft Skills</h3>
              <p className="skills__modal-description">
                {/* narisara sangbunluerit */}
              </p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Interpersonal, collaborative, and communication
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Problem-Solving</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Prioritization and time management
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Understanding of Design Principles
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Empathy</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Curiosity and continuous learning
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
