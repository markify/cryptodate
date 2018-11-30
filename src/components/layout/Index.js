import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
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
						<DatePicker />
						<Link to={`result`} >
						<button type="submit" className="check-btn">
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
