import React from 'react';
class Countdown extends React.Component {
  setCountDown() {
    const endtime = new Date(Date.parse('May 20, 2017'));
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    this.setState({
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    })
  }
  componentWillMount() {
    this.setCountDown();
  }
  componentDidMount() {
    window.setInterval(function(){
      this.setCountDown();
    }.bind(this), 1000);
  }
  render() {
    const textData = this.props.textData;
    return (
      <div className="countdown-text-container">
        <div className="countdown-clock">
          <span className="countdown-clock--item">
            <p>{this.state.days}</p>
            <small>{textData.days}</small>
          </span>
          <span className="countdown-clock--item">
            <p>{this.state.hours}</p>
            <small>{textData.hours}</small>
          </span>
          <span className="countdown-clock--item">
            <p>{this.state.minutes}</p>
            <small>{textData.minutes}</small>
          </span>
          <span className="countdown-clock--item">
            <p>{this.state.seconds}</p>
            <small>{textData.seconds}</small>
          </span>
        </div>
        <h1>{textData.countdownHeader}</h1>
      </div>
    );

  }
}

export default Countdown;
