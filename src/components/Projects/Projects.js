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
      <div className="Projects">
      {/* <div className="videos">
        <iframe className="vimeo"
          src="https://player.vimeo.com/video/474486293" 
          title="Minnesota Go project presentation"
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen>
        </iframe>
      </div> */}
        <div className="singleProject">
          <img className="projectImage" src="/MNGO.png" alt="Person kayaking in the boundary waters"/>
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips, comment or delete a trip from their 'My Trips' view</h1>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/blackIgnite.png" alt="Person kayaking in the boundary waters"/>
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips, comment or delete a trip from their 'My Trips' view</h1>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/movie_saga_homepage_screenshot.png" alt="Person kayaking in the boundary waters"/>
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips, comment or delete a trip from their 'My Trips' view</h1>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/CoopsGallery.png" alt="Person kayaking in the boundary waters"/>
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips, comment or delete a trip from their 'My Trips' view</h1>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/toDoList.png" alt="Person kayaking in the boundary waters"/>
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips, comment or delete a trip from their 'My Trips' view</h1>
        </div>
    </div>
    );
  }
}

export default Projects;