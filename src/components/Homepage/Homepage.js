import React, { Component } from 'react';

class Homepage extends Component {
    state = {
      heading: 'Homepage',
    };
  
    render() {
      return (
        <div>
          <h2>{this.state.heading}</h2>
        </div>
      );
    }
  }
  
  export default Homepage;