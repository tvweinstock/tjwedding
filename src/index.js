import React from 'react';
import { render } from 'react-dom';
import { Miss } from 'react-router';
import { BrowserRouter } from 'react-router';

import './css/style.css'
import App from './templates/App';
import NotFound from './templates/NotFound';

const repo = `/${window.location.pathname.split('/')[1]}`
const Root = (props) => {
  return (
    <BrowserRouter basename={repo}>
      <div>
        <App />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
