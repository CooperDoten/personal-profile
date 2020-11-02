import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
    state = {
      heading: 'NAV',
    };
  
    render() {
      return (
        <div className="Nav">
            <div className="options">
              <h1 className="Nav-Item"><Link to="/">Home</Link></h1>
              <h1 className="Nav-Item"><Link to="/projects">Projects</Link></h1>
              <h1 className="Nav-Item"><Link to="/music">Music</Link></h1>
              <h1 className="Nav-Item">About</h1>
            </div>
        </div>
      );
    }
  }
  
  export default Nav;