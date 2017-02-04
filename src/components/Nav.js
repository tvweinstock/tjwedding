import React from 'react';
import LangPicker from './LangPicker';
import lodash from 'lodash';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', lodash.throttle(this.stickIt, 10));
  }
  stickIt() {
    let orgMenuPos = document.querySelector('nav').getBoundingClientRect();
    let orgMenuTop = orgMenuPos.top + document.body.scrollTop;
    const orgMenu = document.querySelector('.original');
    const clonedMenu = document.querySelector('.cloned');
    if (document.body.scrollTop >= (orgMenuTop)) {
      let orgMenuLeft = orgMenu.getBoundingClientRect().left;
      clonedMenu.style.cssText = `position:fixed; margin: 0 auto; z-index:500; left:${orgMenuLeft}; top:0; opacity:1; display:flex`;
      orgMenu.style.visibility = 'hidden';
    } else {
      clonedMenu.style.display = 'none';
      orgMenu.style.visibility = 'visible';
    }
  }
  render() {
    const data = this.props.data;
    return (
      <nav className={this.props.navType}>
        <ul>
          <li><a href="#">{data.home}</a></li>
          <li><a href="#about">{data.about}</a></li>
          <li><a href="#contact">{data.contact}</a></li>
        </ul>
        <LangPicker data={data.lang} setRootLang={this.props.setRootLang} />
      </nav>
    )
  }
}

export default Nav;
