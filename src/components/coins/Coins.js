import React, { Component} from 'react'
import axios from 'axios'
class Coins extends Component {
  
  state = {
    crypto: []
  };

  componentDidMount() {
  axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=100`)
    .then((res) => {
      this.setState({ crypto: res.data.data });
      console.log(res.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    const { crypto } = this.state;
    console.log(crypto)
    return (
      <React.Fragment>
			<section id="coins">
				<div className="coinrank">
					<div className="col-md-3 card">
            <h1> Bitcoin </h1>
					</div>
          <div className="card">
            <h1> Bitcoin </h1>
					</div>
          <div className="card">
            <h1> Bitcoin </h1>
					</div>
          <div className="card">
            <h1> Bitcoin </h1>
					</div>
          <div className="card">
            <h1> Bitcoin </h1>
					</div>
          <div className="card">
            <h1> Bitcoin </h1>
					</div>
				</div>
			</section>
		</React.Fragment>
    )
  }

}
export default Coins;
