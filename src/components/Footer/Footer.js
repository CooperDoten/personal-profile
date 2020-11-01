import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
        <div className="Footer">
        <div className="Footer-Bar">
          <div className="Footer-Options">
            <h1 className="Nav-Item">About</h1>
            <h1 className="Nav-Item">Projects</h1>
            <h1 className="Nav-Item"><a href="https://github.com/CooperDoten">Github</a></h1>
            <h1 className="Nav-Item">About</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;