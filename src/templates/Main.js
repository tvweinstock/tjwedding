import React from 'react';
import WavePattern from '../components/WavePattern';
// import CircleImage from '../components/CircleImage';

class Main extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="home" className="invitation">
        <p>{textData.inviteTitle}</p>
        <h2>{textData.inviteNames}</h2>
        <p>{textData.inviteDate}</p>
        <p>{textData.inviteAddress}</p>
        <p>{textData.inviteConclusion}</p>
        <WavePattern />
      </section>
    );
  }
}

export default Main;
