import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="Qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qulification__container container">
        <div className="qulification__tabs">
          <div className="qulification__button">
            <i className="uil uil-graduation-cap qulification__icon"></i>{" "}
            Graduation
          </div>
        </div>

        <div className="qulification__sections">
          <div className="qulification__content">
            {/* data1 */}
            <div className="qulification__data">
              <div>
                <h3 className="qulification__title">
                  King Mongkut's Institute of Technology Ladkrabang
                </h3>
                <span className="qulification__subtitle">
                  Bachelor of Science Program in Computer Science
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i> {"  "}
                  2019 - Present
                </div>
              </div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div></div>
            </div>
            {/* data2 */}
            <div className="qulification__data">
              <div></div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div>
                <h3 className="qulification__title">
                  Saint Joseph Thiphawan School
                </h3>
                <span className="qulification__subtitle">
                  Sciences and Mathematics Program
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {"  "}
                  2013 - 2019
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
