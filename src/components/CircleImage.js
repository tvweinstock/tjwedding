import React from 'react';

const CircleImage = (props) => {
  return (
    <figure className="circle-image">
      <img src={props.source} alt=""/>
    </figure>
  );
};

export default CircleImage;
