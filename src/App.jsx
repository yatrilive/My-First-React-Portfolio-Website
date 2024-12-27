import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experienc from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {

useEffect(() => {
  Aos.init();
}, []);

 return (
  <>
    <Navbar />
    <Home />
    <Experienc />
    <Projects />
    <Skills />
    <Contact />
  </>
 );
};

export default App
