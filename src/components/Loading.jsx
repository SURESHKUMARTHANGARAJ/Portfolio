import React from 'react'
import loading from '../assets/images/Loading.gif'
const Loading = () => {
  return (
    <div className='loading'>
      <div data-aos="zoom-in-up">W e l c o m e</div>
      <img src={loading} alt="" />
    </div>
  )
}

export default Loading
