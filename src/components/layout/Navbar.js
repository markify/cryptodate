import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import cryptodate from './img/cryptodatenet.png'

// import { Link } from 'react-router-dom';
class Navbar extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isToggle: true,
  }
  this.toggleMenu = this.toggleMenu.bind(this);
}

toggleMenu(){
  this.setState({isToggle: !this.state.isToggle});
}

render() {
  let mainNav = this.state.isToggle ? "toggle-open" : "toggle-closed";
  return (
		<React.Fragment>
      <div className="container">
        <header className="top-nav">
          <Link to="/">
          <div className="top-logo">
            <img src={cryptodate} alt="crypto logo" />
          </div>
          </Link>
          <label className="res-menu">
          <input type="checkbox" className="checkbox ${mainNav}"id="toggle"></input>
          <span className="menu">
            <span className="hamburger" >
            </span>
          </span>
          <ul className='${mainNav}'>
            <li>
              <Link to="/" className='${mainNav}'  onClick= {this.isToggle}> 
              Home
              </Link>
            </li>
            <li>
              <Link to="/coins" className='${mainNav}'  onClick= {this.isToggle}> 
              Coins
              </Link>
            </li>
            <li>
              <Link to="/"className='${mainNav}'  onClick= {this.isToggle}> 
              Login
              </Link>
            </li>
          </ul>
          </label>
          <nav className="top-menu">
            <ul>
              <li>
                <a className="login" href="/">Login</a>
              </li>
              <li>
                <Link to="/coins" >
                <a>Coins</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
		</React.Fragment>
    );
  }
}

export default Navbar;
