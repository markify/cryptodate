import React, { Component }  from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import './img/bitcoin.png'


class Index extends Component {
// event.target.value for input
	render() {
		return (
		<React.Fragment>
			<section id="index">
				<div className="container">
					<div className="col-md-6">
						<img src="/img/bitcoin.png" className="btc-logo" alt="coin logo" />
					</div>
					<div className="col-md-6">
						<h2> Enter transactions </h2>

						<label> Price </label>
						<input type="text" name="amount" value={this.props.globalState.price}  onChange={this.props.onInputChange} ></input>

						<label> Date </label>
						<DatePicker
						selected={this.props.globalState.startDate}
						onChange={this.props.handleChange}
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						/>
					<Link to={`result`} >
						<button type="submit" className="check-btn" onClick={this.props.checkProfits}>
						Check Profits
            		</button>
					</Link>
					</div>
				</div>
			</section>
			<Footer/>
		</React.Fragment>
		);
	} 	
}

export default Index;
