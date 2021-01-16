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
          <h1 className="work">I like you. Let's work together.</h1>
          </div>        
            <Link to="/projects"><Card className="card"/></Link>
        </div>
      );
    }
  }
  
  export default Homepage;