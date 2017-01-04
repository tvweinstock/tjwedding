import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

class Header extends React.Component {
  constructor(props) {
    super();

  }
 render () {
   const data = this.props.data;
   return (
     <div>
       <Hero title={data.title} subtitle={data.subtitle} />
       <header>
         <Nav data={data} setRootLang={this.props.setRootLang} />
       </header>
     </div>
   )
 }
}

export default Header;
