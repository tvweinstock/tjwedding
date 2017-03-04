import React from 'react';
const WavePattern = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <pattern id="zigzag"
               x="0" y="0" width="60" height="120"
               patternUnits="userSpaceOnUse" >
           <polygon fill="#e2ca95" className="faded" points="0,0 30,30 30,60 0,30"></polygon>
           <polygon fill="#e2ca95" points="30,30 60,0 60,30 30,60"></polygon>
           <polygon fill="#f3e5d3" className="faded" points="0,60 30,90 30,120 0,90"></polygon>
           <polygon fill="#f3e5d3" points="30,90 60,60 60,90 30,120"></polygon>
      </pattern>
      <rect fill="url(#zigzag)" x="0" y="0" width="100%" height="100%"/>
    </svg>
  );
};

export default WavePattern;
