import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import '../../App.scss';
// import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<React.Fragment>
		<div className="container">
			<header className="top-nav">
				<Link to="/">
				<div className="top-logo">
					Cryptodate
				</div>
				</Link>
				<nav className="top-menu">
					<ul>
						<li>
							<a className="login" href="">Login</a>
						</li>
						<li>
							<a className="register" href="">Register</a>
						</li>
						<li>
							<a className="events" href="">Events</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
		</React.Fragment>
	);
};

export default Navbar;
