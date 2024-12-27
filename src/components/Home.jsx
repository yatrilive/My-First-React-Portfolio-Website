import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Sarvesh_Recent_Updated_CV.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi! Welcome to my profile",
        "My name is Sarvesh Pandey",
        "I'm a full stack developer", "(MERN stack developer)"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos= "fade-up-right"
        data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="sarvesh-resume"
            className="btn btn-outline-warning my-3"
          >
            View Resume
          </a>
        </div>
        <div className="right">
          <div className="img"
          data-aos= "fade-up-left"
          data-aos-duration="1000"
          >
            <img src={`assets/${hero.imgSrc}`} alt="Hero Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
