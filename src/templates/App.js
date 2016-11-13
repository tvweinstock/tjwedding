import React from 'react';
import Hero from '../components/Hero'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Hero title="July 22, 2016"
              subtitle="Please join us for our wedding" />
      </div>
    );
  }
}

export default App;
