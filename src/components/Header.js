import React from 'react';
import TJ from './TJ'
import { Link } from 'react-router';

class Header extends React.Component {
   render () {
     const data = this.props.data;
     return (
       <header>
       <TJ />
        <nav>
          <ul>
            <li><Link to="/" activeOnlyWhenExact activeClassName="active">{data.home}</Link></li>
            <li><Link to="/about" activeClassName="active">{data.about}</Link></li>
            <li><Link to="/contact" activeClassName="active">{data.contact}</Link></li>
          </ul>
        </nav>
       </header>
     )
   }
}

export default Header;
