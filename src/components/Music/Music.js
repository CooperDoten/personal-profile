import React, { Component } from 'react';
import './Music.css'

class Music extends Component {
  state = {
    heading: 'Music',
  };

  render() {
    return (
    <div id="musicBody">
        <div className="albumGallery">
            <div id="DiscDiv">
                <h1 className="DiscTitle">Selected Work</h1>
            </div>
            <a href="https://sethconover.bandcamp.com/track/the-fish"><img src="/theFish.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://open.spotify.com/album/7Kh6aJsc0JuhZJUc10bmJb"><img src="/knowBetter.png" className="albumCovers" alt="album cover"/></a>
            <a href="https://condavison.bandcamp.com/album/your-love-and-rent"><img src="/loveAndRent.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://dreamspookmusic.bandcamp.com/"><img src="/dreamspeak.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://jourmusic.xyz/"><img src="/jour.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://arbirn.bandcamp.com/album/ar-birn"><img src="/arbirn.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="http://www.grycts.com/"><img src="/charisma.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://jennielawless.bandcamp.com/album/two-songs"><img src="/jennieTwoSongs.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://jennielawless.bandcamp.com/track/my-good-friend-richard"><img src="/richard.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="https://jennielawless.bandcamp.com/track/emilys-favorite-song"><img src="/emilysFave.jpg" className="albumCovers" alt="album cover"/></a>
            <a href="http://johnchuckandtheclass.com/"><img src="/cannonball.jpeg" className="albumCovers" alt="album cover"/></a>
            <a href="https://sethconover.bandcamp.com/track/downstairs"><img src="/Downstairs.jpg" className="albumCovers" alt="album cover"/></a>
        {/* <iframe id="jourEmbed"
        name="jour"
            frameBorder="0"
            height="60px"
            width="450px"
            src="https://drive.google.com/file/d/1SFjmjwT6Jizk_ofSO0dBdGl8FaaAwx6r/preview?usp=sharing">
        </iframe> */}
        </div>
      </div>
    );
  }
}

export default Music;