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
            <h1 className="Nav-Links" id="copyright">&#169; Cooper Doten</h1>
            <a className="Nav-Logos" href="https://github.com/CooperDoten"><img  id="gitIcon" src="/github-logo.png" alt="github logo"/></a>
            <a className="Nav-Logos" href="https://www.linkedin.com/in/cooper-doten/"><img  id="linkedIcon" src="/linkedInLogo.png" alt="linkedIn logo"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;