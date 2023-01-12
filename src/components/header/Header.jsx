import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  /*=============== Change background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="" className="logo__img" />
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="home"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i class="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="about"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="skills"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i className="uil uil-rocket nav__icon"></i> Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="experience"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i className="uil uil-briefcase nav__icon"></i> Experience
              </Link>
            </li>

            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="certificates"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i className="uil uil-trophy nav__icon"></i> Certificates
              </Link>
            </li>

            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                to="contact"
                activeClass="nav__link active-link"
                spy={true}
                smooth={true}
                offset={-40}
                duration={200}
                className="nav__link"
              >
                <i className="uil uil-phone nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
