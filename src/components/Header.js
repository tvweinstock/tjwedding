import React from 'react';
import Hero from './Hero';
import Nav from './Nav';

class Header extends React.Component {
 render () {
   const data = this.props.data;
   return (
     <section className="header">
       <Hero title={data.title} subtitle={data.subtitle} clockData={data.clock} />
       <header>
         <Nav data={data} setRootLang={this.props.setRootLang} navType="original" />
         <Nav data={data} setRootLang={this.props.setRootLang} navType="cloned" />
       </header>
     </section>
   )
 }
}

export default Header;
