import { Component } from 'react';
import './memes.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';


export default class Memes extends Component {
  constructor() {
    super();
    this.ids = [
      'Rjymxp8',
      'bcNtqPw', 
      'c8envsP',
      'mOAbPsF',
      'uLn3f0i',
      'rVeThh6',
      '7Y61Qq6',
      'VaJNVZ2',
      'XMrtBSV',
      'TCsY1Uq',
      'EZ6so8N',
      'uwi4amb',
      'D7J7qKH',
      'nsticnp',
      'DH8PFJ7',
      'ckfvXkw',
      'k2ifvtU',
      'x7eO2a5',
      'W9MkJxT',
      'ZN0oIQ0',
    ]
  }

  getRandomId = () => {
    return this.ids[Math.floor(Math.random()* this.ids.length)];
  }

  render(props, state) {
    return (
      <div className="Memes">
        <header className="Page-header">
          <Navbar/>
          <img 
            src={`https://i.imgur.com/${this.getRandomId()}.png`} 
            alt='Whoops failed to load there, try to refresh!' 
            style={{width: 'auto', height: '70vh'}}>
          </img>
        </header>
      </div>
    );
  }
}
