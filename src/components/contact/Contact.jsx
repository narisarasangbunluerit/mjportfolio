import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY,
  REACT_APP_reCAPTCHA_SITE_KEY,
} = process.env;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const [reCAPTCHAVerifed, setReCAPTCHAVerifed] = useState(false);
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  function reCAPTCHAOnChange(value) {
    console.log("Captcha value:", value);
    setReCAPTCHAVerifed(true);
  }

  const sendEmail = (values, event) => {
    event.preventDefault();
    console.log(require("dotenv").config());
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toggleTab(1);
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Please Feel Free To Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Social Media</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="uil uil-line contact__card-icon"></i>

              <h3 className="contact__card-title">Line</h3>
              <span className="contact__card-data">ID : narissmynt</span>

              <a
                href="https://line.me/ti/p/pf01qLxvnw"
                className="contact__button"
                target="_blank"
              >
                Contact Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-facebook-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Facebook</h3>
              <span className="contact__card-data">Narisara Sangbunluerit</span>

              <a
                href="https://www.facebook.com/mi.minty.1"
                className="contact__button"
                target="_blank"
              >
                Contact Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-instagram-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">nanxmint_ris</span>

              <a
                href="https://www.instagram.com/nanxmint_ris/"
                className="contact__button"
                target="_blank"
              >
                Contact Me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title2">For more details</h3>
          <span className="section__subtitle">
            narisara.sangbunluerit@gmail.com
          </span>
          <form
            ref={form}
            onSubmit={(e) => {
              handleSubmit(sendEmail)(e);
            }}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                {...register("name", { required: "Please enter your name." })}
              />
            </div>
            {errors.name && (
              <p className="validate-error">{errors.name.message}</p>
            )}

            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                id="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="validate-error">{errors.email.message}</p>
            )}

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message..."
                {...register("message", {
                  required: "Please send me some message.",
                })}
              ></textarea>
            </div>
            {errors.message && (
              <p className="validate-error">{errors.message.message}</p>
            )}

            <div className="recap">
              <ReCAPTCHA
                sitekey={REACT_APP_reCAPTCHA_SITE_KEY}
                onChange={reCAPTCHAOnChange}
              ></ReCAPTCHA>
            </div>

            <button
              className="button button--flex"
              type="submit"
              disabled={!reCAPTCHAVerifed}
            >
              Send Message
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>

            <div
              className={
                toggleState === 1
                  ? "contact__modal active-modal"
                  : "contact__modal"
              }
            >
              <div className="contact__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times contact__modal-close"
                ></i>

                <h3 className="contact__modal-title">
                  <h1>
                    <p>✅</p>
                  </h1>{" "}
                  Thank you for your email.{" "}
                </h3>
                <p className="contact__modal-description">
                  I will response as soon as possible.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
