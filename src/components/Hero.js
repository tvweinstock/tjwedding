import React from 'react'

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="title-group">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  )
}

export default Hero;
