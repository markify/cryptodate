import React, { Component} from 'react'
import axios from 'axios'
class Coins extends Component {
  
  state = {
    crypto: {},
    data: []
  };

  componentDidMount() {
  axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=100`)
    .then((res) => {
      this.setState({   crypto: res.data.data });
    
    })
    .catch(function (error) {
      console.log(error);
    });
    this.fetchCryptocurrencyData()
  }
  fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=BTC&limit=100")
        .then(response => {
            this.setState({ data: response.data});
        
        })
        .catch(err => console.log(err));
  }

  render () {
    const { crypto, data} = this.state;
    console.log(crypto); 
    console.log(data);
    //<img src={'https://s2.coinmarketcap.com/static/img/coins/32x32/'+  data[key].id + '.png'} />
    return (
      <React.Fragment>
			<section id="coins">
        <div class="title"> Crypto Coins </div>
          <div className="coinrank">
            { Object.keys(data).map( (key)=> {
                return <div className="col-md-3 box">
                <div>
                  <div style={{float: 'right', width: '67%', border: 'none', textAlign: 'left', padding: '5px 0px', lineHeight: '30px'}}>
                    <span style={{fontSize: 18}}>
                      <a href="" target="_blank" style={{textDecoration: 'none', color: 'rgb(16, 112, 224)'}}>Bitcoin (BTC)</a>
                    </span>
                    <br />
                    <span style={{fontSize: 16}}>1214.34 USD 
                      <span style={{color: '#d94040'}}>(-0.12%)</span>
                    </span>
                  </div>
                  <div style={{textAlign: 'center', padding: '5px 0px', width: '33%'}}>
                    <img src={'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@ab04b0a2823a4a51bf8f43153f4b497c8888af08/128/color/'+ data[key].symbol.toLowerCase() + '.png'} style={{height:'32px',width:'32px'}}/>                  
                  </div>
                </div>        
                  <div style={{borderTop: '1px solid #e1e5ea', clear: 'both'}}>

                    <div style={{textAlign: 'center', float: 'left', width: '50%', fontSize: 12, padding: '12px 0 16px 0', borderRight: '1px solid #e1e5ea', lineHeight: '1.25em'}}>                        MARKET CAP                        
                      <br />
                      <br />
                      <span style={{fontSize: 14}}>$67.31 B 
                        <span style={{fontSize: 9}}>USD</span>
                      </span>
                    </div>
                    <div style={{textAlign: 'center', float: 'left', width: '50%', fontSize: 12, padding: '12px 0 16px 0', lineHeight: '1.25em'}}>                        VOLUME (24H)                        
                      <br />
                      <br />
                      <span style={{fontSize: 14}}>$5.47 B 
                        <span style={{fontSize: 9}}>USD</span>
                      </span>
                    </div>
                    </div>
                    <div style={{borderTop: '1px solid #e1e5ea', textAlign: 'center', clear: 'both', fontSize: 10, fontStyle: 'italic', padding: '5px 0'}}>
                      <a href={'https://coinmarketcap.com/currencies/'+ data[key].id } target="_blank" style={{textDecoration: 'none', color: 'rgb(16, 112, 224)', fontSize:'1rem'}}> {data[key].symbol}<br></br> Rank {data[key].rank}</a>
                    </div>
                  </div>           
              })
            }
              { Object.keys(crypto).map( (key)=> {
                return <div>
                  <img src={'https://s2.coinmarketcap.com/static/img/coins/32x32/'+ crypto[key].id  + '.png'} />     
                  <p> {crypto[key].quotes["USD"].price}</p>
                </div>
                })
              }
          </div>
			</section>
		</React.Fragment>
    )
  }
}
export default Coins;
