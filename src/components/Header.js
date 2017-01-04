import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

class Header extends React.Component {
 render () {
   const data = this.props.data;
   return (
     <div>
       <Hero title={data.title} subtitle={data.subtitle} />
       <header>
         <Nav data={data} setRootLang={this.props.setRootLang} navType="original" />
         <Nav data={data} setRootLang={this.props.setRootLang} navType="cloned" />
       </header>
     </div>
   )
 }
}

export default Header;
