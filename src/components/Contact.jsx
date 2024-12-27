import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        
          <a
            href="https://www.instagram.com/yatri_live"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarveshkpandey/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://x.com/yatrilive"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaTwitterSquare className="icons" />
          </a>
          <a
            href="https://github.com/yatrilive"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mail: svpandey398@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
