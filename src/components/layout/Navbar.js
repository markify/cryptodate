import React from 'react';
import logo from '../../logo.svg';
import '../../App.scss';
// import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav style={{textAlign:'center'}}>
		<img src={logo} style={{height:'40px', widht:'40px;'}} className="App-logo" alt="logo" />
		<h4>Nav</h4>
		</nav>
	);
};

export default Navbar;
