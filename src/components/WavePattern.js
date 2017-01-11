import React from 'react';
// https://jsfiddle.net/adamculpepper/vWrx3/
const WavePattern = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <pattern id="circlePattern"
               x="0" y="0" width="145" height="140"
               patternUnits="userSpaceOnUse" >
        <circle cx="30" cy="30" r="30" />
        <circle cx="78" cy="19" r="16" />
        <circle cx="10" cy="119" r="9" />
        <circle cx="120" cy="70" r="15" />
        <circle cx="89" cy="45" r="11" />
        <circle cx="120" cy="25" r="22" />
        <circle cx="20" cy="85" r="20" />
        <circle cx="70" cy="80" r="28" />
        <circle cx="105" cy="92" r="7" />
        <circle cx="38" cy="122" r="17" />
        <circle cx="80" cy="122" r="13" />
        <circle cx="120" cy="116" r="20" />
      </pattern>
      <rect fill="url(#circlePattern)" x="0" y="0" width="100%" height="100%"/>
    </svg>
  );
};

export default WavePattern;
