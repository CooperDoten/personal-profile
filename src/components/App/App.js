import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="appDiv">
          <Nav/>
          <Homepage />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

