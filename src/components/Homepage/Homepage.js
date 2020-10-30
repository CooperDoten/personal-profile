import React, { Component } from 'react';

class Homepage extends Component {
    state = {
      heading: 'Homepage',
    };
  
    render() {
      return (
        <div>
           <img height="400px" width="300px" src="/profile_pic.jpg"/>
        </div>
      );
    }
  }
  
  export default Homepage;