import React, { Component }  from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import './img/bitcoin.png'

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  startDate: new Date(),
		  price: 1
		};
		this.handleChange = this.handleChange.bind(this);
		this.onInputChange = this.onInputChange.bind(this)
	  }
	
	  handleChange(date) {
		this.setState( { startDate: date}, () => console.log(this.state.startDate) );
	  }

	  onInputChange(event){
		this.setState({ price: event.target.value } , () => console.log(this.state.price) );
	  }
// event.target.value for input
	render() {
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
						<input type="text" name="amount" value={this.props.price}  onChange={this.onInputChange} ></input>

						<label> Date </label>
						<DatePicker
						selected={this.state.startDate}
						onChange={this.handleChange}
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						/>
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
	} 	
}

export default Index;
