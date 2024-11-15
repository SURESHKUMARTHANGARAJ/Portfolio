import React from 'react'
import Title from '../components/Title'

const Services = () => {
  return (
    <div className='service-container' id='service'>
    <Title title="Services I Offer" sub="Take advantage of the opportunity to explore my skills through various sample projects!"/>
    <div className='service'>
        <div className="service-box">
          <p className='service-head' style={{color:"#8C4BFF"}}>Web Development</p>
          <p className='service-body'>Utilizing cutting-edge technologies and best practices, I develop responsive and user-friendly websites tailored to meet your specific needs, ensuring a seamless online experience.</p>
        </div>
        <div className="service-box">
          <p className='service-head' style={{color:"#8C4BFF"}}>UI/UX Design</p>
          <p className='service-body'>I specialize in creating intuitive and aesthetically pleasing interfaces that enhance user experience, making digital interactions enjoyable and effective.</p>
        </div>
        <div className="service-box">
          <p className='service-head' style={{color:"#8C4BFF"}}>Graphic Design</p>
          <p className='service-body'>With a keen eye for detail, I produce visually striking graphics that communicate your brand message clearly and effectively, adding value to your projects.</p>
        </div>
    </div>
    </div>
  )
}

export default Services
