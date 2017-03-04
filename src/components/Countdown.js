import React from 'react';
// http://stackoverflow.com/questions/32880484/react-js-live-clock-update
class Countdown extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    
  }
  setCountDown() {
    const deadLine = '2017-05-20'
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor( (t/1000) % 60 );
      const minutes = Math.floor( (t/1000/60) % 60 );
      const hours = Math.floor( (t/(1000*60*60)) % 24 );
      const days = Math.floor( t/(1000*60*60*24) );
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    function initializeClock(id, endtime){
      const clock = document.getElementById(id);
      const timeinterval = setInterval(function(){
        const t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
                          'hours: '+ t.hours + '<br>' +
                          'minutes: ' + t.minutes + '<br>' +
                          'seconds: ' + t.seconds;
        if(t.total<=0){
          clearInterval(timeinterval);
        }
      },1000);
    }
  }
  render() {
    return (
      <span className="countdown-clock"></span>
    );

  }
}

export default Countdown;
