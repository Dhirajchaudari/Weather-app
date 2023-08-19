import React from "react";

import { Element } from "react-scroll";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Header />
      <Element name="home">
        <Hero />
      </Element>
      <Brands />
      <Element name="about">
        <About />
      </Element>
      <Skills />
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      <BackToTopButton />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* <div style={{ height: "2000px" }}></div> */}
    </div>
  );
};

export default App;
