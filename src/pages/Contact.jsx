import React from 'react';
import ContactForm from '../components/ContactForm';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <Title 
        title={"Get in Touch"} 
        sub="I’d love to hear from you, whether you're interested in collaboration or have a question."
      />
      <div className="outer-box">
        <div className="cont">
          <h3> Hello Recruiters,</h3>
          <p className="recruiter-message">
            I am passionate about building impactful solutions and contributing my expertise to a talented team. If you're looking for a skilled developer who can quickly adapt and make a difference, feel free to reach out! I'm excited to discuss how I can bring value to your team.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
