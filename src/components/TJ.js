import React from 'react';

class TJ extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const header = document.querySelector('header');
    console.log('scrolliieesss', header);
    let scrollTop = e.srcElement.body.scrollTop;
    if (scrollTop > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  render() {
    return (
      <div className="tj">
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

export default TJ;
