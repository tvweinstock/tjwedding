import React from 'react';
import lodash from 'lodash';

class Hero extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', lodash.throttle(this.filterIt, 100));
  }
  filterIt() {
    const heroAsset = document.querySelector('.hero__asset');
    const heroAssetHeight = document.querySelector('.hero__asset').clientHeight;
    const filterAt = (window.scrollY + window.innerHeight) - heroAssetHeight/ 1.5;
    const isHalfScrolled = filterAt > heroAssetHeight / 1.5;
    if (isHalfScrolled) {
      heroAsset.classList.remove('filtered');
    } else {
      heroAsset.classList.add('filtered');
    }

  }
  render () {
    return (
      <div className="hero">
        <span className="logo">TJ</span>
        <div className="hero__asset filtered">
          <div className="hero__title-group">
            <h1 className="hashtag">#jobi2017</h1>
            <h1>Tobi + Jeoff </h1>
            <h2>20 / 05 / 2017</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
