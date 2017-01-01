import React from 'react';
import { render } from 'react-dom';
import { Miss } from 'react-router';

import './css/style.css'
import App from './templates/App';
import NotFound from './templates/NotFound';

const Root = (props) => {
  return (
    <div>
      <App />
      <Miss component={NotFound}/>
    </div>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
