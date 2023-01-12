import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";

import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};
export default App;
