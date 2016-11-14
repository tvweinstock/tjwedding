import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Miss } from 'react-router';

import './css/style.css'
import App from './templates/App';
import NotFound from './templates/NotFound';

const Root = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="main">
          <App />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
