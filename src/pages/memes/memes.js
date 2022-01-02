import { Component } from 'react';
import './memes.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';


export default class Memes extends Component {
  constructor() {
    super();
    this.ids = ['Rjymxp8', 'bcNtqPw', 'afregsatrw45']
  }

  getRandomId = () => {
    return this.ids[Math.floor(Math.random()* this.ids.length)];
  }

  render(props, state) {
    return (
      <div className="Memes">
        <header className="Page-header">
          <Navbar/>
          <p>Memes placeholder</p>
          <img src={`https://i.imgur.com/${this.getRandomId()}.png`} alt='Whoops failed to load there'></img>
        </header>
      </div>
    );
  }
}
