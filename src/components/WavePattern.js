import React from 'react';
const WavePattern = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <pattern id="zigzag"
               x="0" y="0" width="60" height="240"
               patternUnits="userSpaceOnUse" >
           <polygon fill="#ffe66d" className="faded" points="0,0 30,30 30,60 0,30"></polygon>
           <polygon fill="#ffe66d" points="30,30 60,0 60,30 30,60"></polygon>
           <polygon fill="#ff6b6b" className="faded" points="0,60 30,90 30,120 0,90"></polygon>
           <polygon fill="#ff6b6b" points="30,90 60,60 60,90 30,120"></polygon>
           <polygon fill="#4ecdc4" className="faded" points="0,120 30,150 30,180 0,150"></polygon>
           <polygon fill="#4ecdc4" points="30,150 60,120 60,150 30,180"></polygon>
           <polygon fill="#1a535c" className="faded" points="0,180 30,210 30,240 0,210"></polygon>
           <polygon fill="#1a535c" points="30,210 60,180 60,210 30,240"></polygon>
      </pattern>
      <rect fill="url(#zigzag)" x="0" y="0" width="100%" height="100%"/>
    </svg>
  );
};

export default WavePattern;
