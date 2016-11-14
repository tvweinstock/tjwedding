import React from 'react';

class About extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <div id="about">
        <h1>{textData.date}</h1>
        <h2>{textData.morelove}</h2>
      </div>
    )
  }
}

export default About;
