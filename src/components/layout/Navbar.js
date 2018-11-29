import React from 'react';
import logo from '../../logo.svg';
import '../../App.scss';
// import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<React.Fragment>
		<div className="container">
			<header>
				<div className="top-logo">
					Cryptodate
				</div>
				<nav className="top-menu">
					<ul>
						<li>
							<a className="login" href="">Login</a>
						</li>
						<li>
							<a className="register" href="">Register</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
		</React.Fragment>
	);
};

export default Navbar;
