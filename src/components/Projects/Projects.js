import React, { Component } from 'react';
import './Projects.css'
import Flipper from '../Flipper/Flipper'
class Projects extends Component {
  state = {
    heading: 'Projects',
  };
  componentDidMount() {
    console.log(`testing... testing... is this thing on?`)
  }
 
  render() {
      
    return (
        <div id="projectBody">
            <iframe className="vimeo"
            src="https://player.vimeo.com/video/474486293" 
            title="Minnesota Go project presentation"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen>
            </iframe>
        <div className="Projects">
            {/* <div className="Project-Div">
                <img className="Project-Image" alt="project"
                src="https://github.com/CooperDoten/movie-sagas/raw/master/movie_saga_homepage_screenshot.png?raw=true"/>
            </div> */}
            <Flipper />
        </div>
      </div>
    );
  }
}

export default Projects;