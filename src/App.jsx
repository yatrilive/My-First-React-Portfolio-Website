import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experienc from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer";

import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Experienc />
      <Projects />
      <Skills />
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
