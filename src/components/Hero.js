import React from 'react';
import lodash from 'lodash';
import Countdown from './Countdown';

class Hero extends React.Component {
  constructor() {
    super();
    this.showHideOverlay = this.showHideOverlay.bind(this);
    this.state = {showHideOverlay: true};
  }
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
  showHideOverlay() {
    this.setState({ showHideOverlay: !this.state.showHideOverlay});
  }
  render () {
    return (
      <div className="hero">
        <div className="hero__title-group">
          <h1>Tobi & Jeoff </h1>
          <h2>20 / 05 / 2017</h2>
        </div>
        <div className={ this.state.showHideOverlay ? "hero__container open" : "hero__container close"}>
          <button onClick={this.showHideOverlay.bind(this)} className={ this.state.showHideOverlay ? "overlay-button open" : "overlay-button close"}>✖</button>
          <div className="hero__asset filtered">
            <img src={require('../css/images/tj.jpg')} alt=""/>
          </div>
          <div className="overlay">
            <div className="countdown-wrap">
              <div className="wedding-countdown">
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
