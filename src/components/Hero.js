import React from 'react';

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="title-group">
          <div className="title-group__circle">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
