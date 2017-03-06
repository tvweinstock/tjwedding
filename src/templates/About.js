import React from 'react';
import ImageSwitcher from '../components/ImageSwitcher'

class About extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="about">
        <h1 className="underline">{textData.title}</h1>
        <ImageSwitcher caption={textData.caption} />
      </section>
    )
  }
}

export default About;
