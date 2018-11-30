import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './img/bitcoin.png'

const Index = () => {
	return (
		<React.Fragment>
			<section id="index">
				<div className="container">
					<div className="col-md-6">
						<img src="/img/bitcoin.png" className="btc-logo" />
					</div>
					<div className="col-md-6">
						<h2> Enter transactions </h2>

						<label> Price </label>
						<input type="text" name="amount"></input>

						<label> Date </label>
						<input type="text" name="date"></input>
						<Link to={`result`} >
						<button type="submit">
              				Check Profits
            			</button>
						</Link>
					</div>
				</div>
			</section>
			<Footer/>
		</React.Fragment>
	);
};

export default Index;
