import React from 'react';
import Hero from './Hero';

class Header extends React.Component {
 componentDidMount() {
   const originalMenu = document.querySelector('.menu');
   const clonedMenu = originalMenu.cloneNode(true);
   const header = document.querySelector('header');
   originalMenu.classList.add('original');
   clonedMenu.classList.add('cloned');
   header.appendChild(clonedMenu);
 }
 render () {
   const data = this.props.data;
   return (
     <div>
       <Hero title={data.title} subtitle={data.subtitle} />
       <header>
         <nav className="menu">
           <ul>
             <li><a href="#">{data.home}</a></li>
             <li><a href="#about">{data.about}</a></li>
             <li><a href="#contact">{data.contact}</a></li>
           </ul>
         </nav>
       </header>
     </div>
   )
 }
}

export default Header;
