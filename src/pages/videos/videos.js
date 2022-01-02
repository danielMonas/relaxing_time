import { Component } from 'react';
import YouTube from 'react-youtube';

import './videos.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';


export default class Videos extends Component {
  constructor() {
    super();
    this.ids = [
      'jJ-mBiD8f6Q', // The racoon (Russian)
      'ixFyUzPcHz0', // Borgir
      'mpHvHGMZ0jc', // Welcome To Chilli's
      'R0tvrLcOITU', // Wii Tennis
      '5sNuDu4dE8Y', // Blinding Lights - Cat cover
      'BkD2nN5275c', 
      'Klp5X-RWsWA', 
      'yHNVJXluIKs', 
      'pYkicVrqyDY', 
      'h_-zjjJ8oX0', 
      '4ts5PgVISgc', 
      'VB4CCHHYOqY', 
      'z6EchXyieos', 
      'sGxw7ipTrq8', 
      'axaPh5psu38', 
      '6nE8ifrCB2U', 
      'wWGw0HL61IQ', 
      'XY3PwSVwvCI', 
      '1DqK1ePV2pQ', 
      'hyPE15eWwi8', 
      'EtH9Yllzjcc', 
      '3dcli9i_pvA', 
      'fxJAS_VV6S4', 
      'X3Z44Ir4iRA', 
      'KlmBCX4WUwY'
    ]
  }

  getRandomId = () => {
    let rand_id = this.ids[Math.floor(Math.random()* this.ids.length)];
    console.log('Random ID: ' + rand_id)
    return rand_id;
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
