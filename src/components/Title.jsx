import React from 'react'

const Title = ({title,sub}) => {
  return (
    <div className='px-2 mt-2'>
        <div className="title">{title}</div>
        <div className="sub-title">{sub}</div>
      </div>
  )
}

export default Title
