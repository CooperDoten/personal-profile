import React, { Component } from 'react';

class Nav extends Component {
    state = {
      heading: 'NAV',
    };
  
    render() {
      return (
        <div>
          <h2>{this.state.heading}</h2>
        </div>
      );
    }
  }
  
  export default Nav;