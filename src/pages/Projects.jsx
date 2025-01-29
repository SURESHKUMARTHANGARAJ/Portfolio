import React from 'react'
import Title from '../components/Title'
import { FaExternalLinkAlt } from "react-icons/fa";
import insurance from '../assets/images/project/insurance.png';
import painter from '../assets/images/project/painter.png';
import cloudi5 from '../assets/images/project/Cloudi5.png';
import tictactoe from '../assets/images/project/TicTacToe.png';
import wordhunt from '../assets/images/project/wordgame.png';
import calc from '../assets/images/project/Calculator.png';
import smgroups from '../assets/images/project/smgroups.png';


const Projects = () => {
  return (
    <div className='projects' id='project'>
      <Title title="Recent Projects" sub="ipsum dolor sit amet consectetur adipisicing elit. Accusamus, atque!" />
      <div className="project-container">
        
        <div className="project-card" data-aos="flip-left">
          <img src={smgroups} alt="smgroups" />
          <div className="cont">
          <>
          <h4>SM Groups</h4>
          <p>A professional landing page featuring a service overview, client testimonials, partner logos, and an enquiry form to capture leads efficiently.</p>
          </>
          <div className="live">
          <a href="https://www.thesmgroups.com">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>

        <div className="project-card" data-aos="flip-left">
          <img src={insurance} alt="Insurance Agency" />
          <div className="cont">
          <>
          <h4>Insurance Agency</h4>
          <p>A professional landing page featuring a service overview, client testimonials, partner logos, and an enquiry form to capture leads efficiently.</p>
          </>
          <div className="live">
          <a href="https://sureshkumart.neocities.org/GITHUB%20PROJECTS/Hash%20insurance/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>

        <div className="project-card" data-aos="flip-left">
          <img src={cloudi5} alt="Digital Marketing Agency" />
          <div className="cont">
          <>
          <h4>Digital Marketing Agency</h4>
          <p>Dynamic landing page with sections for services, key benefits, and a user-friendly registration form with validation, guiding visitors through an easy sign-up process.</p>
          </>
          <div className="live">
          <a href="https://cloudi5-sureshkumars-projects-279182e2.vercel.app/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>
        <div className="project-card" data-aos="flip-left">
          <img src={painter} alt="Painting service" />
          <div className="cont">
          <>
          <h4>Painting Service</h4>
          <p>Engaging landing page highlighting services, client testimonials, reasons to choose us, and a gallery of previous work, spread across five additional pages.</p>
          </>
          <div className="live">
          <a href="https://sureshkumart.neocities.org/GITHUB%20PROJECTS/Painting%20Service/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>

        <div className="project-card" data-aos="flip-left">
          <img src={tictactoe} alt="Painting service" />
          <div className="cont">
          <>
          <h4>TicTacToe</h4>
          <p>Engaging landing page highlighting services, client testimonials, reasons to choose us, and a gallery of previous work, spread across five additional pages.</p>
          </>
          <div className="live">
          <a href="https://sureshkumart.neocities.org/GITHUB%20PROJECTS/TicTacToe/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>
        <div className="project-card" data-aos="flip-left">
          <img src={wordhunt} alt="Painting service" />
          <div className="cont">
          <>
          <h4>Word Hunt</h4>
          <p>Engaging landing page highlighting services, client testimonials, reasons to choose us, and a gallery of previous work, spread across five additional pages.</p>
          </>
          <div className="live">
          <a href="https://sureshkumart.neocities.org/GITHUB%20PROJECTS/Word%20game/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>
        <div className="project-card" data-aos="flip-left">
          <img src={calc} alt="Painting service" />
          <div className="cont">
          <>
          <h4>Calculator</h4>
          <p>Engaging landing page highlighting services, client testimonials, reasons to choose us, and a gallery of previous work, spread across five additional pages.</p>
          </>
          <div className="live">
          <a href="https://sureshkumart.neocities.org/GITHUB%20PROJECTS/calculator/">Live Demo &nbsp;<FaExternalLinkAlt />
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
