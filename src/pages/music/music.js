import logo from '../../logo.svg';
import './music.css';
import '../../shared.css';
import Navbar from '../../components/Header/Header';

function Music(props, state) {
  return (
    <div className="Music">
      <header className="Page-header">
        <Navbar/>
        <img src={logo} className="Music-logo" alt="logo" />
        <p>Music placeholder</p>
      </header>
    </div>
  );
}

export default Music;
