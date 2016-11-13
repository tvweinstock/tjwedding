import React from 'react';
import TJ from './TJ'
import {Link} from 'react-router';

class Header extends React.Component {
   render () {
     const data = this.props.data;
     return (
       <header>
       <TJ />
        <nav>
          <ul>
            <NavItem title={data.home} href="home" />
            <NavItem title={data.about} href="about" />
            <NavItem title={data.contact} href="contact" />
          </ul>
        </nav>
       </header>
     )
   }
}

const NavItem = (props) => {
  return (
    <li>
      <Link to={`/${props.href}`} activeClassName="active">
        {props.title}
      </Link>
    </li>
  )
}

export default Header;
