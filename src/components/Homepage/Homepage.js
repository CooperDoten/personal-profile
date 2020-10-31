import React, { Component } from 'react';
import './Homepage.css'
class Homepage extends Component {
    state = {
      heading: 'Homepage',
    };
  
    render() {
      return (
        <div className="homePage">
            <div className="profileCard">
             <img id="profilePicture" src="/profile-picture.png" alt="Cooper Doten full stack developer"/>
           </div>
        </div>
      );
    }
  }
  
  export default Homepage;