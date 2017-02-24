import React from 'react';
import WavePattern from '../components/WavePattern';

class Main extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="home">
        <div className="invitation">
          <p className="invitation__intro">{textData.inviteIntro}</p>
          <div className="stamp-container">
            <img src={require('../css/images/stamp.jpg')} alt=""/>
          </div>
          <p>{textData.inviteTitle}</p>
          <h2>{textData.inviteNames}</h2>
          <p>{textData.inviteDate}</p>
          <p>{textData.inviteAddress}</p>
          <p>{textData.inviteConclusion}</p>
        </div>
        <div className="invitation-pattern">
          <WavePattern />
        </div>
      </section>
    );
  }
}

export default Main;
