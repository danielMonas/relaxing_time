import logo from '../../logo.svg';
import './home.css';
import Navbar from '../../components/Header/Header';

function Home(props, state) {
  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar/>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
         Hello! Welcome to the home page!
        </p>
        
      </header>
    </div>
  );
}

export default Home;
