import React, { Component } from 'react';
import './Projects.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        <Carousel>
          <div>
              <img src="/MNGO.png" />
             <a href="https://github.com/CooperDoten/MN-GO"><p className="legend">MN GO</p></a> 
          </div>
          <div>
              <img src="/blackIgnite.png" />
              <a href="https://github.com/CooperDoten/black-ignite"><p className="legend">Black Ignite!</p></a> 
          </div>
          <div>
              <img src="/movie_saga_homepage_screenshot.png" />
              <a href="https://github.com/CooperDoten/movie-sagas"><p className="legend">Movie Saga</p></a> 
          </div>
          <div>
              <img src="toDoList.png" />
              <a href="https://github.com/CooperDoten/weekend-sql-to-do-list"><p className="legend">Weekend To Do List</p></a> 
          </div>
          <div>
              <img src="CoopsGallery.png" />
              <a href="https://github.com/CooperDoten/react-gallery"><p className="legend">React Gallery</p></a> 
          </div>
          </Carousel>
      <div className="videos">
        <iframe className="vimeo"
          src="https://player.vimeo.com/video/474486293" 
          title="Minnesota Go project presentation"
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
    );
  }
}

export default Projects;