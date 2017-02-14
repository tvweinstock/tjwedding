import React from 'react';
import lodash from 'lodash';

class Hero extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', lodash.throttle(this.filterIt, 100));
  }
  filterIt() {
    const heroAsset = document.querySelector('.hero__asset');
    const heroAssetHeight = document.querySelector('.hero__asset').clientHeight;
    const filterAt = (window.scrollY + window.innerHeight) - heroAssetHeight/ 2;
    const isHalfScrolled = filterAt > heroAssetHeight / 1.5;
    console.log(isHalfScrolled);
    if (isHalfScrolled) {
      heroAsset.classList.remove('filtered');
    } else {
      heroAsset.classList.add('filtered');
    }

  }
  render () {
    return (
      <div className="hero">
        <div className="hero__asset filtered">
          <div className="hero__title-group">
            <h1>Tobi + Jeoff <br/>
            20 / 05 / 2017</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
