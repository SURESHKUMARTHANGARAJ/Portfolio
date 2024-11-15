import React from 'react'
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const Footer = () => {

  const date = new Date();
  const year= date.getFullYear();
  return (
    <footer>
      <div className="footer">
      <div className="foot-about">
            <p className="head">ABOUT</p>
            <p className="body">I'm Suresh Kumar, a passionate full-stack developer and web designer from Salem. A recent engineering graduate with hands-on experience in building dynamic web solutions. Eager to innovate and take on new challenges in the tech world.</p>
          </div>
          <div className="footer-section">
            <p className="head">Quick Links</p>
            <a href="#hero" className='body'>Home</a>
            <a href="#about" className='body'>About</a>
            <a href="#project" className='body'>Projects</a>
            <a href="#skill" className='body'>Skills</a>
            <a href="#service" className='body'>Service</a>
            <a href="#contact" className='body'>Contact</a>
            
          </div>
          <div className="footer-section">
            <p className="head">Services</p>
            <p className="body">Web Development</p>
            <p className="body">UI/UX Design</p>
            <p className="body">Graphic Design</p>
            <p className="body">Content Writing</p>
            
          </div>
          <div className="footer-section">
            <p className="head">Social Media</p>
            <div className="icons">
            <a 
            href="https://wa.me/9092364536?text=Hello%20Suresh,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare className='icon' />
          </a>

          <a href="https://github.com/SURESHKUMARTHANGARAJ"><FaGithubSquare className='icon' /></a>
          <a href="https://www.linkedin.com/in/suresh-kumart/"><FaLinkedin className='icon' /></a>
          <a href="mailto:sureshkumar14228@gmail.com">
            <ImMail className="icon" />
          </a>
          </div>
          </div>
      </div>
      <hr />
      <div className="last">
      © {year} Suresh Kumar. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
