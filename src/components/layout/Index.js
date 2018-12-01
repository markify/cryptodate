import React, { Component }  from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import axios from 'axios'
import './img/bitcoin.png'


class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  startDate: null,
			price: 1,	
			data: '',
      status: '',
			totalStatus: '',
			btc: (Math.floor(new Date()/1000))
		};
		this.handleChange = this.handleChange.bind(this);
		this.onInputChange = this.onInputChange.bind(this)
    this.checkProfits = this.checkProfits.bind(this)
//always bind state changes on functions
		}

		handleChange(date) {
			this.setState({
				startDate: date
			}, () => console.log(Math.floor(this.state.startDate/1000) ));	
		}

	  onInputChange(event){
		this.setState({ price: event.target.value } , () => console.log(this.state.price) );
		}
		
		componentWillMount() {
			var self = this;
			axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${this.state.btc}&extraParams=crypto_profits_cp`)
				.then(function (response) {
					self.setState({
						btcToday: response.data.BTC
					}, () => {
						console.log(self.state);
					})
				})
				.catch(function (error) {
					console.log(error);
				});
		}

		checkProfits(){
			//https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1513285669&extraParams=crypto_profits_cp
			var self = this;
			axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${Math.floor(this.state.startDate/1000) }&extraParams=crypto_profits_cp`)
				.then(function (response) {
					self.setState({
						data: response.data.BTC
					}, () => {
						console.log(self.state);
						const CP = self.state.data.USD
						var newCP = (self.state.price * 100)
						newCP = (newCP * CP) / 100
						const SP = self.state.btcToday.USD;
						var newSP = (self.state.price * 100)
						newSP = (newSP * SP) / 100
						console.log(`new start ${newSP}`)
						console.log(`new current ${newCP}`)
						if (newCP < newSP) {
							var gain = newSP - newCP
							var gainPercent = (gain/ newCP) * 100
							gainPercent = gainPercent.toFixed(2)
							console.log(`${self.state.price} bitcoin newSP: ${newSP}, SP: ${SP}, newCP: ${newCP}, CP: ${CP}`)
							console.log(`profit percent is ${gainPercent}`)
							//set state with totals and change location
							self.setState({
								status: 'gain',
								totalStatus: {
									newCP: newCP.toFixed(2),
									CP: CP,
									newSP: newSP.toFixed(2),
									SP: SP,
									percent: gainPercent
								}
							}, () => console.log(self.state))
	
						} else {
							var loss = newCP - newSP
							var lossPercent = (loss / newCP) * 100
							lossPercent = lossPercent.toFixed(2)
							console.log(`loss percent is ${lossPercent}`)
							//set state with totals and change location
							self.setState({
								status: 'loss',
								totalStatus: {
									newCP: newCP.toFixed(2),
									CP: CP,
									newSP: newSP.toFixed(2),
									SP: SP,
									percent: lossPercent
								}
							}, () => console.log(self.state))
						}
					})
				})
				.catch(function (error) {
					console.log(error);
				});
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
						<button type="submit" className="check-btn" onClick={this.checkProfits}>
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
