import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'

import Header from './components/Header';
import App from './templates/App';
import About from './templates/About';
import Contact from './templates/Contact';
import NotFound from './templates/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/contact" component={Contact} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}


render(
  <Root />,
  document.getElementById('root')
);
