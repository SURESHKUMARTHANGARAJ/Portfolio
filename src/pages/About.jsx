import React from 'react'
import img from '../assets/images/profile.png'
import Title from '../components/Title'
import resume from '../assets/SureshKumar-T.pdf'

const About = () => {
  return (
    <div className="about-container" id="about">
        <Title title="About" sub="Crafting Digital Experiences with Passion and Skill" />
        <div className='about'>
        <div className="about-img">
            <img src={img} alt="" />
        </div>
        <div className="about-text" data-aos="fade-right">
            <p>I’m Suresh Kumar, a recent graduate from an Anna University affiliated college with a Bachelor's in Engineering, class of 2024. I’m an enthusiastic IT aspirant with a passion for technology, particularly in full-stack development. My expertise lies in the MERN stack, and I have hands-on experience in building dynamic web applications, creating efficient back-end solutions, and designing intuitive user interfaces. As a web designer, I’m skilled in tools like Figma, Illustrator, and Photoshop, allowing me to create visually appealing and user-friendly websites. I’m always eager to tackle new challenges, learn emerging technologies, and find creative solutions to problems.</p>
            <a 
        href={resume} 
        download="T.sureshkumar.pdf" 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <button>Download CV</button>
      </a>
            
        </div>
      
    </div>
    </div>
  )
}

export default About
