import React from 'react';
import Hero from './Hero'
class Header extends React.Component {
   render () {
     return (
       <header>
       <Hero />
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
