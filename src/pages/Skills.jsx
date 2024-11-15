import React from 'react';
import html from '../assets/images/logo/html.png';
import css from '../assets/images/logo/css.png';
import bootstrap from '../assets/images/logo/bootstrap.png';
import sass from '../assets/images/logo/sass.png';
import javascript from '../assets/images/logo/javascript.png';
import react from '../assets/images/logo/react.png';
import next from '../assets/images/logo/next.png';
import express from '../assets/images/logo/express.png';
import node from '../assets/images/logo/node.png';
import mongodb from '../assets/images/logo/mongo-db.png';
import sql from '../assets/images/logo/sql.png';
import git from '../assets/images/logo/git.png';
import figma from '../assets/images/logo/figma.png';
import ai from '../assets/images/logo/ai.png';
import ps from '../assets/images/logo/ps.png';
import canva from '../assets/images/logo/canva.png';
import Title from '../components/Title';
import ProgressBar from '../components/ProgressBar'

const Skills = () => {
  return (
    <div className='skills' id="skill">
    <Title title="Technical Skills" sub="A comprehensive overview of my technical expertise and tools I use regularly."/>
      <div className="skill-container px-5 py-5">
        <div className="skill-card" data-aos="fade-up">
          <img src={html} alt="HTML" />
          <h2>HTML</h2>
          <p>HyperText Markup Language, the standard language for creating web pages.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={css} alt="CSS" />
          <h2>CSS</h2>
          <p>Cascading Style Sheets, used for describing the presentation of a document written in HTML.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={bootstrap} alt="Bootstrap" />
          <h2>Bootstrap</h2>
          <p>A popular CSS framework for developing responsive and mobile-first websites.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={sass} alt="Sass" />
          <h2>Sass</h2>
          <p>A preprocessor scripting language that compiles into CSS, adding features like variables and mixins.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={javascript} alt="Javascript" />
          <h2>JavaScript</h2>
          <p>A versatile scripting language that enables interactive web pages and dynamic content.</p>
          <ProgressBar value='99' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={react} alt="ReactJS" />
          <h2>React.js</h2>
          <p>A JavaScript library for building user interfaces using a component-based approach.</p>
          <ProgressBar value='99' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={next} alt="Next.js" />
          <h2>Next.js</h2>
          <p>A React framework for building server-side rendered and statically generated web applications.</p>
          <ProgressBar value='60' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={node} alt="Node.js" />
          <h2>Node.js</h2>
          <p>A JavaScript runtime built on Chrome's V8 engine, allowing server-side scripting and building scalable network applications.</p>
          <ProgressBar value='80' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={express} alt="Express.js" />
          <h2>Express.js</h2>
          <p>A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.</p>
          <ProgressBar value='90' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={mongodb} alt="MongoDB" />
          <h2>MongoDB</h2>
          <p>A NoSQL database program that uses JSON-like documents with optional schemas.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={sql} alt="SQL" />
          <h2>SQL</h2>
          <p>A standard language for accessing and managing databases, commonly used with relational database systems.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={git} alt="Git" />
          <h2>Git</h2>
          <p>A distributed version control system for tracking changes in source code during software development.</p>
          <ProgressBar value='100' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={figma} alt="Figma" />
          <h2>Figma</h2>
          <p>A web-based UI design and prototyping tool that allows real-time collaboration.</p>
          <ProgressBar value='80' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={ai} alt="Illustrator" />
          <h2>Illustrator</h2>
          <p>Adobe Illustrator, a vector graphics editor used for creating illustrations, logos, and complex artworks.</p>
          <ProgressBar value='70' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={ps} alt="Photoshop" />
          <h2>Photoshop</h2>
          <p>Adobe Photoshop, a powerful image editing and graphic design software.</p>
          <ProgressBar value='70' />
        </div>
        <div className="skill-card" data-aos="fade-up">
          <img src={canva} alt="Canva" />
          <h2>Canva</h2>
          <p>An online graphic design platform that allows users to create social media graphics, presentations, and other visual content.</p>
          <ProgressBar value='100' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
