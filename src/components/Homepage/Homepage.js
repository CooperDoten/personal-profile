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
           <div className="testDiv">
             <h1>I pooped my pance</h1>
           </div>
           <div className="standard-btn-1">
             <div className="btnText">
                <a>With Text</a>
              </div>
           </div>
        </div>
      );
    }
  }
  
  export default Homepage;