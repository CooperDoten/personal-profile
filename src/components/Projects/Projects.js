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
          <h1 className="projectDescription">I am incredibly passionate about Minnesota and all of the beauty that the landscape provides. It is in that spirit that I created the app "MN GO". This app makes it possible for a user to view all state parks in Minnesota that they can camp at and book a trip to that state park. Additionally, users can view all previously created trips,
          comment or delete a trip from their 'My Trips' view.</h1>
          <a href="https://github.com/CooperDoten/MN-GO" className="button1">Github Repo</a>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/blackIgnite.png" alt="Speaker Sign up view for Black Ignite"/>
          <h1 className="projectDescription">This is an app I developed with the help of a couple cohort-mates while at Prime Digital Academy. The app was developed in collaboration with the Black Ignite Organization
          to help them have a portal that allows users to sign up as well as a rich administrator portal to edit and view submissions.</h1>
          <a href="https://github.com/CooperDoten/MN-GO" className="button1">Github Repo</a>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/movie_saga_homepage_screenshot.png" alt="Movie Gallery, similar to Netflix"/>
          <h1 className="projectDescription">Weekend sprint project that allows a user to view a list of movies that are pulled from a postgresql database. Additionally,
          the user is able to click on any movie to view a synoposis as well as genres associated with that movie. Finally, the user is able to add a movie to the
          entire list of movies.</h1>
          <a href="https://github.com/CooperDoten/MN-GO" className="button1">Github Repo</a>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/CoopsGallery.png" alt="Gallery of pictures on a web page"/>
          <h1 className="projectDescription">For this project I built a react app that diplayed an image gallery. Each image has a "love it" button that updates the amount of likes that it has.
I componetized the Gallery-list, item and like div/button and made each picture hoverable, so the user knows that they can click it. On click the user can read a description of the image they are looking.</h1>
<a href="https://github.com/CooperDoten/MN-GO" className="button1">Github Repo</a>
        </div>
        <div className="singleProject">
          <img className="projectImage" src="/toDoList.png" alt="Web page of a To Do List"/>
          <h1 className="projectDescription">Created an app where a user can input a task to complete and mark them as completed or delete the task off a table.
In building this app I practiced skills for full stack integration, connecting a jQuery powered front-end through a node server to a SQL database.</h1>
<a href="https://github.com/CooperDoten/MN-GO" className="button1">Github Repo</a>
        </div>
    </div>
    );
  }
}

export default Projects;