import React from 'react';
const WavePattern = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <pattern id="circlePattern"
               x="0" y="0" width="145" height="140"
               patternUnits="userSpaceOnUse" >
        <circle cx="30" cy="30" r="30" fill="#011627" className="oa1" />
        <circle cx="10" cy="119" r="9" fill="#2ec4b6" className="oa2" />
        <circle cx="120" cy="70" r="15" fill="#e71d36" className="oa3" />
        <circle cx="70" cy="80" r="28" fill="#2ec4b6" className="oa1" />
        <circle cx="80" cy="122" r="13" fill="#e71d36" className="oa3" />
      </pattern>
      <rect fill="url(#circlePattern)" x="0" y="0" width="100%" height="100%"/>
    </svg>
  );
};

export default WavePattern;
