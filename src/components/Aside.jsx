import React, { useEffect, useState } from 'react';
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';

const Aside = ({ isOpen, changeToggle }) => {
  // State to keep track of the currently active section
  const [activeSection, setActiveSection] = useState('');

  // Function to handle link clicks and smooth scrolling
  const handleNavigation = (e, target) => {
    e.preventDefault();
    // Scroll to the target section
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    // Toggle the aside visibility
    changeToggle(e);
  };

  // Use IntersectionObserver to detect the currently visible section
  useEffect(() => {
    const sections = ['hero', 'about', 'skill', 'project', 'service', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold to detect when the section is considered visible
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Helper function to determine if a link should have the "active" class
  const getNavLinkClass = (section) => {
    return activeSection === section ? 'navlink active' : 'navlink';
  };

  return (
    <aside className={`${isOpen ? "active" : ""}`}>
      <div className="logo">Suresh</div>
      <div className="nav-links">
        <a
          href="#hero"
          className={getNavLinkClass('hero')}
          onClick={(e) => handleNavigation(e, 'hero')}
        >
          Home
        </a>
        <a
          href="#about"
          className={getNavLinkClass('about')}
          onClick={(e) => handleNavigation(e, 'about')}
        >
          About
        </a>
        <a
          href="#project"
          className={getNavLinkClass('project')}
          onClick={(e) => handleNavigation(e, 'project')}
        >
          Projects
        </a>
        <a
          href="#skill"
          className={getNavLinkClass('skill')}
          onClick={(e) => handleNavigation(e, "skill")}
        >
          Skills
        </a>
        <a
          href="#service"
          className={getNavLinkClass('service')}
          onClick={(e) => handleNavigation(e, 'service')}
        >
          Service
        </a>
        <a
          href="#contact"
          className={getNavLinkClass('contact')}
          onClick={(e) => handleNavigation(e, 'contact')}
        >
          Contact
        </a>
      </div>
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
      <div className="close" onClick={changeToggle}>X</div>
    </aside>
  );
};

export default Aside;
