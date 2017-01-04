import React from 'react';

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__title-group">
          <div className="hero__title-group--circle">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
