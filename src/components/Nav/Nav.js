import React, { Component } from 'react';
import './Nav.css';
class Nav extends Component {
    state = {
      heading: 'NAV',
    };
  
    render() {
      return (
        <div className="Nav">
            <div className="options">
              <h1 className="Nav-Item">About</h1>
              <h1 className="Nav-Item">Projects</h1>
              <h1 className="Nav-Item"><a href="https://github.com/CooperDoten">Github</a></h1>
              <h1 className="Nav-Item">About</h1>
            </div>
        </div>
      );
    }
  }
  
  export default Nav;