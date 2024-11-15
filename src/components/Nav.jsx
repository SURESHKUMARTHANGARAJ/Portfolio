import React, { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Nav = ({ changeToggle }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // IDs of the sections to observe
    const sections = ["hero", "about", "skill", "project", "service", "contact"];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="d-flex align-items-center">
        <RiMenu2Fill className="menu" onClick={(e) => changeToggle(e)} />
        <div className="logo">Suresh</div>
      </div>
      <div className="links">
        <a
          href="#hero"
          className={`link ${activeSection === "hero" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "hero")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`link ${activeSection === "about" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "about")}
        >
          About
        </a>
        <a
          href="#project"
          className={`link ${activeSection === "project" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "project")}
        >
          Projects
        </a>
        <a
          href="#skill"
          className={`link ${activeSection === "skill" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "skill")}
        >
          Skills
        </a>
        <a
          href="#service"
          className={`link ${activeSection === "service" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "service")}
        >
          Service
        </a>
        <a
          href="#contact"
          className={`link ${activeSection === "contact" ? "active" : ""}`}
          onClick={(e) => handleSmoothScroll(e, "contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
