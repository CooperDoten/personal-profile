import React, { Component } from 'react';


class Music extends Component {
  state = {
    heading: 'Music',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default Music;