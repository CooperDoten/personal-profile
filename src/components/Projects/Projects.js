import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
  state = {
    heading: 'Projects',
  };

  render() {
    return (
      <div className="Projects">
        <div className="Project-Div">
            <img className="Project-Image" 
            src="https://github.com/CooperDoten/movie-sagas/raw/master/movie_saga_homepage_screenshot.png?raw=true"/>
        </div>
        <div className="Project-Div">
        <img />
        </div>
        <div className="Project-Div">
            <img />
        </div>
        <div className="Project-Div">
            <img />
        </div>
        <div className="Project-Div">
            <img />
        </div>
      </div>
    );
  }
}

export default Projects;