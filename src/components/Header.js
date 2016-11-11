import React from 'react';
import TJ from './TJ'
import {Link} from 'react-router';

class Header extends React.Component {
   render () {
     return (
       <header>
       <TJ />
        <nav>
          <ul>
            <NavItem title="home" href="home" />
            <NavItem title="about" href="about" />
            <NavItem title="contact" href="contact" />
          </ul>
        </nav>
       </header>
     )
   }
}
//
// class NavItem extends React.Component {
//   render () {
//     return (
//         <li>
//           <Link to={`/${props.href}`} activeClassName="active">
//             {props.title}
//           </Link>
//         </li>
//     )
//
//   }
// }

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
