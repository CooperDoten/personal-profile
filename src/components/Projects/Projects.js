import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
  state = {
    heading: 'Projects',
  };
  componentDidMount() {
    console.log(`testing... testing... is this thing on?`)
  }
 
  render() {
      
    return (
        <div>
            <iframe className="vimeo"
            src="https://player.vimeo.com/video/474486293" 
            title="Minnesota Go project presentation"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen>
            </iframe>
        <div className="Projects">
            <div className="Project-Div">
                <img className="Project-Image" alt="project"
                src="https://github.com/CooperDoten/movie-sagas/raw/master/movie_saga_homepage_screenshot.png?raw=true"/>
            </div>
            <div className="Project-Div">
            <img alt="project"/>
            </div>
            <div className="Project-Div">
                <img alt="project"/>
            </div>
            <div className="Project-Div">
                <img alt="project"/>
            </div>
            <div className="Project-Div">
                <img alt="project"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;