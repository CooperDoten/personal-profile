import React, { Component } from 'react';
import './Projects.css'
import Flipper from '../Flipper/Flipper';
import FlipperTwo from '../FlipperTwo/FlipperTwo';
class Projects extends Component {
  state = {
    heading: 'Projects',
  };
  componentDidMount() {
    console.log(`testing... testing... is this thing on?`)
  }
 
  render() {     
    return (        
      <div className="Projects">

        <iframe className="vimeo"
            src="https://player.vimeo.com/video/474486293" 
            title="Minnesota Go project presentation"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default Projects;