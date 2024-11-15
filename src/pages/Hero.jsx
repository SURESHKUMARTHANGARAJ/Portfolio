import React from 'react';
import logo from '../assets/images/coding.png';
import Type from '../components/Type';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FiDownloadCloud, FiExternalLink } from "react-icons/fi";
import resume from '../assets/SureshKumar-T.pdf';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className='content' >
        <h2 data-aos="fade-right">Hello, I'm Suresh,</h2>
        <h2 data-aos="fade-right">I'm a {<Type />}</h2>
        <p data-aos="fade-right">
          I'm a full-stack developer with a passion for crafting high-quality web solutions. 
          I specialize in development, graphic design, and UI/UX, delivering seamless digital experiences.
        </p>
        <div className="icons">
          <a 
            href="https://wa.me/9092364536?text=Hello%20Suresh,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare className='icon' data-aos="fade-right"/>
          </a>

          <a href="https://github.com/SURESHKUMARTHANGARAJ"><FaGithubSquare className='icon' data-aos="fade-right"/></a>
          <a href="https://www.linkedin.com/in/suresh-kumart/"><FaLinkedin className='icon' data-aos="fade-right"/></a>
          <a href="mailto:sureshkumar14228@gmail.com">
            <ImMail className="icon" data-aos="fade-right"/>
          </a>
        </div>

        <div className="buttons">
          <a 
            href={resume} 
            download="T.sureshkumar.pdf" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button data-aos="fade-right">Resume&nbsp;<FiDownloadCloud /></button>
          </a>
          <a href="#contact" ><button data-aos="fade-right">Hire Me&nbsp;<FiExternalLink /></button></a>
        </div>
      </div>

      <div className="img-box" data-aos="fade-down">
        <img src={logo} alt="Developer working on code illustration" />
      </div>
    </div>
  );
};

export default Hero;
