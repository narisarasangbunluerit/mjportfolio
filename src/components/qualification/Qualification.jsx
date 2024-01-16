import React from "react";
import "./qualification.css";
import Transcript from "../../assets/Transcript.pdf";

const Qualification = () => {
  return (
    <section className="Qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My graduation and Work</span>

      <div className="qulification__container container">
        <div className="qulification__tabs">
          <div className="qulification__button">
            <i className="uil uil-bag qulification__icon"></i> Journey
          </div>
        </div>

        <div className="qulification__sections">
          <div className="qulification__content">
            {/* data1 */}
            <div className="qulification__data">
              <div></div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div>
                <h3 className="qulification__title">EdVISORY CO., LTD.</h3>
                <span className="qulification__subtitle">
                  UX/UI Designer - Contract 6 months
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {"  "}
                  2023 - Present
                </div>
              </div>

              <div></div>
            </div>

            {/* data2 */}
            <div className="qulification__data">
              <div>
                <h3 className="qulification__title">EdVISORY CO., LTD.</h3>
                <span className="qulification__subtitle">
                  UX/UI Designer - Internship 3 months
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i> {"  "}
                  2023 - 2023
                </div>
              </div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div></div>
            </div>

            {/* data3 */}
            <div className="qulification__data">
              <div></div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
              </div>

              <div>
                <h3 className="qulification__title">
                  King Mongkut's Institute of Technology Ladkrabang
                </h3>
                <span className="qulification__subtitle">
                  Bachelor of Science Program in Computer Science
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {"  "}
                  2019 - 2023
                </div>

                <div className="qulification__button2">
                  <a download="" href={Transcript} className="button2">
                    <u>Transcript</u>
                  </a>
                </div>
              </div>

              <div></div>
            </div>

            {/* data4 */}
            <div className="qulification__data">
              <div>
                <h3 className="qulification__title">
                  Saint Joseph Thiphawan School
                </h3>
                <span className="qulification__subtitle">
                  Sciences and Mathematics Program
                </span>
                <div className="qulification__calendar">
                  <i className="uil uil-calendar-alt"></i> {"  "}
                  2013 - 2019
                </div>
              </div>

              <div>
                <span className="qulification__rounder"></span>
                <span className="qulification__line"></span>
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
