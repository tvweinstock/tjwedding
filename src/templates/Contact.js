import React from 'react';
import FontAwesome from 'react-fontawesome';


class Contact extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="contact">
        <h1 className="underline white">{textData.title}</h1>
        <div className="icon-group">
          <input id="🏰" type="radio" name="contact-icons" defaultChecked="checked"/>
          <label htmlFor="🏰">
            <FontAwesome name='map-marker' />
            <div className="contact-textcontent">
              <p>{textData.location}</p>
            </div>
          </label>
          <input id="💌" type="radio" name="contact-icons"/>
          <label htmlFor="💌">
            <FontAwesome name='envelope' />
            <div className="contact-textcontent">
              <p>{textData.contactInfo}</p>
              <h4>Tobi:</h4>
              <a href="tel:+33 7 83 18 67 24">+33 7 83 18 67 24</a>
              <a href="mailto:tv.weinstock@gmail.com">tv.weinstock@gmail.com</a>
              <h4>Jeoffrey:</h4>
              <a href="tel:+33 7 82 34 04 55">+33 7 82 34 04 55</a>
              <a href="mailto:jeoffrey.roussey@gmail.com">jeoffrey.roussey@gmail.com</a>
            </div>
          </label>
        </div>
      </section>
    );
  }
}


export default Contact;
