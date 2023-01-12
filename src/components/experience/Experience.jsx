import React, { useState } from "react";
import All from "./All";
import App from "./App";
// import Design from "./Design";
import Web from "./Web";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="experience__container container grid">
        <div className="experience__tabs" >
          <div
            className={ 
              toggleState === 1
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </div>

          <div
            className={
              toggleState === 2
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            Web
          </div>

          <div
            className={
              toggleState === 3
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            App
          </div>

          {/* <div
            className={
              toggleState === 4
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(4)}
          >
            Design
          </div> */}
        </div>
      </div>

      <section className="experience_detail section" id="experience_detail">
        <div>{toggleState === 1 ? <All /> : <div></div>}</div>
        <div>{toggleState === 2 ? <Web /> : <div></div>}</div>
        <div>{toggleState === 3 ? <App /> : <div></div>}</div>
        {/* <div>{toggleState === 4 ? <Design /> : <div></div>}</div> */}
      </section>
    </section>
  );
};

export default Experience;
