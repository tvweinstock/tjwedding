import React from 'react';

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const header = document.querySelector('header');
    let scrollTop = e.srcElement.body.scrollTop;
    if (scrollTop > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
   render () {
     return (
       <header>
        <div className="t-and-j">
          <span className="t">T</span>
          <span className="and">&</span>
          <span className="heart">♡</span>
          <span className="j">J</span>
        </div>
        <nav>
          <ul>
            <NavItem title="home" href="" />
            <NavItem title="about" href="about" />
            <NavItem title="contact" href="contact" />
          </ul>
        </nav>
       </header>
     )
   }
}

const NavItem = (props) => {
  return (
    <li>
      <a href={`/${props.href}`}>{props.title}</a>
    </li>
  )
}

export default Header;
