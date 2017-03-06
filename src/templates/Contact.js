import React from 'react';
import FontAwesome from 'react-fontawesome';


class Contact extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="contact">
        <h1 className="underline white">{textData.title}</h1>
        <div className="icon-group">
          <input id="🏰" type="radio" name="contact-icons"/>
          <label htmlFor="🏰">
            <FontAwesome name='map-marker' />
            <p>{textData.location}</p>
          </label>
          <input id="💌" type="radio" name="contact-icons" defaultChecked="checked"/>
          <label htmlFor="💌">
            <FontAwesome name='envelope' />
            <p>{textData.contactInfo}</p>
          </label>
        </div>
      </section>
    );
  }
}


export default Contact;
