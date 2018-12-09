import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import cryptodate from './img/cryptodatenet.png'

// import { Link } from 'react-router-dom';
const Navbar = () => {
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
        <input type="checkbox"></input>
        <span className="menu">
          <span className="hamburger">
          </span>
        </span>
        <ul>
          <li>
            <Link to="/"> 
            <a style={{color:'white'}}>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/coins"> 
            <a style={{color:'white'}}>Coins</a>
            </Link>
          </li>
          <li>
            <Link to="/"> 
            <a style={{color:'white'}}>Login</a>
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
};

export default Navbar;
