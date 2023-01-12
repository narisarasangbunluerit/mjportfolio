import React from "react";
import "./footer.css";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <img src={footer} alt="" className="footer__img" />
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://line.me/ti/p/pf01qLxvnw"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-line"></i>
          </a>

          <a
            href="https://www.facebook.com/mi.minty.1"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-facebook-messenger"></i>
          </a>

          <a
            href="https://www.instagram.com/nanamint.ris/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
