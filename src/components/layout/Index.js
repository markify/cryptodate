import React, { Component }  from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import bitcoin from'./img/bitcoin.png';


class Index extends Component {
// event.target.value for input

	render() {
		return (
		<React.Fragment>
			<section id="index" style={{transition:'all 2s ease-in-out'}}>
				<div className="container" style={{transition:'all 2s ease-in-out'}}>
					<div className="col-md-6">
						<img src={bitcoin} className="btc-logo" alt="coin logo" />
					</div>
					<div className="col-md-6">
						<h2> Enter transactions </h2>

						<label> Price </label>
						<input type="text" autoFocus={true} pattern="[0-9]*" name="amount" value={this.props.globalState.price}  onChange={this.props.onInputChange} ></input>

						<label> Date </label>
						<DatePicker
						selected={this.props.globalState.startDate}
						onChange={this.props.handleChange}
						peekNextMonth
						showMonthDropdown
            dropdownMode="select"
            maxDate={new Date()}
						/>
					<Link to={`result`} >
						<button type="submit" className="check-btn" onClick={this.props.checkProfits}>
						Check profits
            </button>
					</Link>
					</div>
				</div>
			</section>
		</React.Fragment>
		);
	} 	
}

export default Index;
