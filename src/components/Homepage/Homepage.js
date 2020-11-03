import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from '../Card/Card'
import './Homepage.css'
class Homepage extends Component {
    state = {
      heading: 'Homepage',
    };
  
    render() {
      return (
        <div className="homePage">
          <div className="pance">
          <h1 >I like you. Let's work together.</h1>
          </div>        
            <Link to="/projects"><Card /></Link>
        </div>
      );
    }
  }
  
  export default Homepage;