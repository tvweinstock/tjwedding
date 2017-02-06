import React from 'react';
import lodash from 'lodash';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', lodash.throttle(this.parallaxIt, 10));
  }
  parallaxIt() {
    let scrolled = document.body.scrollTop;
    const heroImage = document.querySelector('.hero__asset');
    heroImage.style.backgroundPosition = "50%" + parseInt(-scrolled/6) + "px";
  }
  render () {
    return (
      <div className="hero">
        <div className="hero__asset">
          <div className="hero__title-group">
            <h1>Tobi + Jeoff <br/>
            Coming Spring 2017...</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
