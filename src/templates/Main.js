import React from 'react';

class Main extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <div id="main">
        <h1>{textData.title}</h1>
      </div>
    );
  }
}

export default Main;
