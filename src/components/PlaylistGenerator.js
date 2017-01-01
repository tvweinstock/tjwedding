import React from 'react';

class PlayListGenerator extends React.Component {
  constructor(){
    super();
    this.songSubmit = this.songSubmit.bind(this);
  }
  // Allow user to enter some names
  songSubmit(e) {
    e.preventDefault();
  }
  // Go to spotify and get the artists

  // With the ids we want to get the albums

  // Then get tracks

  // Then build Playlist


  render() {
    return (
      <section className="playlist-form">
  			<div className="form">
  				<form onSubmit={this.songSubmit}>
  					<input type="search" value="" />
  					<input type="submit" value="Create" />
  				</form>
  			</div>
  			<div className="playlist">
  				<div className="loader">
  					<div className="inner-circle"></div>
  				</div>
  			</div>
      </section>
    )
  }
}

export default PlayListGenerator;
