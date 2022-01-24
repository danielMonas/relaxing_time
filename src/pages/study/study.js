import React, { Component }  from 'react';
import YouTube from 'react-youtube';
import './study.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';

export default class Study extends Component {
  constructor() {
    super();
    this.opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  }


  render(props, state) {
    return (
      <div className="Study">
        <header className="Page-header">
          <Navbar/>
          <div>
            Hello there you busy student!<br/>
            Hope this will help you
            <YouTube videoId={"5qap5aO4i9A"} opts={this.opts}/>
            <img 
              src={`https://i.imgur.com/Bx1wmWW.jpeg`} 
              alt='Whoops failed to load there, try to refresh!' 
              style={{width: 'auto', height: '70vh'}}>
            </img>
          </div>
        </header>
      </div>
    );
  }
}
