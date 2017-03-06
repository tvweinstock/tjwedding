import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = (props) => {
  return (
    <footer>
      <h1 className="underline">À bientôt!</h1>
      <div className="footer-asset-container">
        <img src={require('../css/images/paris.jpg')} alt=""/>
      </div>
      <div className="hashtag">
        <FontAwesome name='twitter' />
        <span>#JOBI2017</span>
      </div>
    </footer>
  )
}

export default Footer;
