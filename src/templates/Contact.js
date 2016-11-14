import React from 'react';

class Contact extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <div id="contact">
        <h1>{textData.location}</h1>
        <p>{textData.desc}</p>
      </div>
    );
  }
}

export default Contact;
