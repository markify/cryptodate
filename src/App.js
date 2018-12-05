import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './sass/main.scss'

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Result from './components/result/Result';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  startDate: null,
			price: 1,
			data: '',
      status: '',
			totalStatus: {},
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
		  this.setState({ price: event.target.value });
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
			var self = this;
			axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${Math.floor(this.state.startDate/1000) }&extraParams=crypto_profits_cp`)
				.then(function (response) {
					self.setState({
						data: response.data.BTC
					}, () => {
						console.log(self.state);
						const datePrice = self.state.data.USD
						var dnewPrice = (self.state.price * 100)
						dnewPrice = (dnewPrice * datePrice) / 100
						const curPrice = self.state.btcToday.USD;
						var cnewPrice = (self.state.price * 100)
						cnewPrice = (cnewPrice * curPrice) / 100

						if (dnewPrice < cnewPrice) {
							var gain = cnewPrice - dnewPrice
							var gainPercent = (gain/ dnewPrice) * 100
							gainPercent = gainPercent.toFixed(2)

							self.setState({
								status: 'gain',
								totalStatus: {
									dnewPrice: dnewPrice.toFixed(2),
									datePrice: datePrice,
									cnewPrice: cnewPrice.toFixed(2),
									curPrice: curPrice,
									percent: gainPercent
								}
							}, () => console.log(self.state))
	
						} else {
							var loss = dnewPrice - cnewPrice
							var lossPercent = (loss / dnewPrice) * 100
							lossPercent = lossPercent.toFixed(2)

							self.setState({
								status: 'loss',
								totalStatus: {
									dnewPrice: dnewPrice.toFixed(2),
									datePrice: datePrice,
									cnewPrice: cnewPrice.toFixed(2),
									curPrice: curPrice,
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
		// using globalstate=this.state to get results from higher component
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>		
              <Route exact path="/" component={ () => <Index handleChange={this.handleChange} globalState={this.state} onInputChange={this.onInputChange} checkProfits={this.checkProfits}/>} />
              <Route exact path="/result" component={ () => <Result globalState={this.state} />} />
            </Switch>
          </div>
        </React.Fragment>
			</Router>
    );
  }
}

export default App;
