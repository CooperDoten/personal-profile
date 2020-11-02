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
import Projects from '../Projects/Projects';
import Music from '../Music/Music';
class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="appDiv">
          <Nav/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/music" exact component={Music}/> 
          <Route path="/projects" exact component={Projects}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

