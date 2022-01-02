import { Component } from 'react';
import YouTube from 'react-youtube';

import './videos.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';



export default class Videos extends Component {
  constructor() {
    super();
    this.ids = ['jJ-mBiD8f6Q', 'BkD2nN5275c']
  }

  getRandomId = () => {
    return this.ids[Math.floor(Math.random()* this.ids.length)];
  }

  render(props, state) {
    return (
      <div className="Videos">
        <header className="Page-header">
          <Navbar/>
          <YouTube videoId={this.getRandomId()}/>
        </header>
      </div>
    );
  }
}
