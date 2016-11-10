import React from 'react';

class Hero extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const hero = document.querySelector('.hero');
    let scrollTop = e.srcElement.body.scrollTop;
    if (scrollTop > 20) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
  }
  render() {
    return (
      <div className="hero">
        <div className="t-and-j">
          <span className="t">T</span>
          <span className="and">&</span>
          <span className="heart">♡</span>
          <span className="j">J</span>
        </div>
      </div>
    )
  }
}

export default Hero;
