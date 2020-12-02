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
            <Link className="Nav-Links" to="/"><h1 className="Nav-Item">Home</h1></Link>
            <Link to="/projects"><h1 className="Nav-Item">Projects</h1></Link>
            <Link to="/music"><h1 className="Nav-Item">Music</h1></Link>
            </div>
        </div>
      );
    }
  }
  
  export default Nav;