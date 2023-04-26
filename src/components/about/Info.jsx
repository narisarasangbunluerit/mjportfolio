import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Trainee</span>
      </div>

      <div className="about__box">
        <i class="uil uil-laptop about__icon"></i>

        <h3 className="about__title">Role</h3>
        <span className="about__subtitle">UX/UI Designr</span>
      </div>

      <div className="about__box">
        <i class="uil uil-clipboard-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
