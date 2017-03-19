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
        <span>#JOBI2017</span>
        <ul>
          <li><FontAwesome name='twitter' /></li>
          <li><FontAwesome name='facebook' /></li>
          <li><FontAwesome name='instagram' /></li>
          <li><FontAwesome name='snapchat' /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
