import React from 'react';

class Main extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="home">
        <h1>{textData.mainTitle}</h1>
      </section>
    );
  }
}

export default Main;
