import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import cryptodate from './img/cryptodatenet.png'

class Navbar extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    isToggle: false,
  }
  this.toggleMenu = this.toggleMenu.bind(this);
}

toggleMenu(){
  this.setState({isToggle: !this.state.isToggle});
}

render() {
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
          <input type="checkbox" checked={this.state.isToggle} onClick={this.toggleMenu}></input>
          <span className="menu" >
            <span className="hamburger" >
            </span>
          </span>
          <ul>
            <li>
              <Link to="/" onClick={this.toggleMenu} style={{textDecoration:'none',color:'white', transition:'all 2s ease-in-out'}}>
               Home
              </Link>
            </li>
            <li>
              <Link to="/coins" onClick={this.toggleMenu} style={{textDecoration:'none',color:'white'}}>
              Coins
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={this.toggleMenu} style={{textDecoration:'none',color:'white'}}>
              Login
              </Link>
            </li>
          </ul>
          </label>
          <nav className="top-menu">
            <ul>
              <li>
                <Link to="/login" className="login">
                 Login
                </Link>
              </li>
              <li>
                <Link to="/coins" >
                Coins
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
