import React from 'react';

class Header extends React.Component {
   render () {
     return (
       <header>
        <nav>
          <ul>
            <NavItem title="about" />
            <NavItem title="contact" />
          </ul>
        </nav>
       </header>
     )
   }
}

const NavItem = (props) => {
  return (
    <li>
      <a href={`/${props.title}`}>{props.title}</a>
    </li>
  )
}

export default Header;
