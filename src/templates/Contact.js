import React from 'react';

class Contact extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="contact">
        <h1>{textData.location}</h1>
        <p>{textData.desc}</p>
      </section>
    );
  }
}

export default Contact;
