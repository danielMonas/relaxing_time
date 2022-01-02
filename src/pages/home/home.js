import React  from 'react';
import './home.css';
import Navbar from '../../components/Header/Header';

function Home(props, state) {
  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar/>
        <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn170.picsart.com%2Fupscale-235773094028212.png&f=1&nofb=1' className="Home-logo" alt="logo" />
        <p>Hello Shelly! </p>
        <p>I made you site to relax and watch</p>
        <p> some funny memes and videos </p>
        <p>I love you and hope you're alright <span role={"img"}>🧡</span> </p>
        
      </header>
    </div>
  );
}

export default Home;
