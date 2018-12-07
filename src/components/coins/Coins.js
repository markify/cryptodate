import React, { Component} from 'react'
import axios from 'axios'
class Coins extends Component {
  
  state = {
    crypto: {},
  };

  componentDidMount() {
  axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=100`)
    .then((res) => {
      this.setState({   crypto: res.data.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    const { crypto, data} = this.state;
    console.log(crypto);
    //<img src={'https://s2.coinmarketcap.com/static/img/coins/32x32/'+  data[key].id + '.png'} />
    return (
      <React.Fragment>
			<section id="coins">
        <div class="title"> Crypto Coins </div>
          <div className="coinrank">
            { Object.keys(crypto).map( (key)=> {
              return <div className="col-md-3 box">
                <div>
                  <div style={{float: 'right', width: '65%', border: 'none', textAlign: 'center',  marginTop:'10px', lineHeight: '35px'}}>
                    <span style={{fontSize: '18px'}}>
                      <a href={'https://coinmarketcap.com/currencies/'+ crypto[key].name } target="_blank" style={{textDecoration: 'none', color: 'rgb(16, 112, 224)', fontSize:'100%'}}>
                      {crypto[key].name} ({crypto[key].symbol})</a>
                      <br></br>
                      {crypto[key].last_updated}
                    </span>
                 
                  </div>
                  <div style={{textAlign: 'right', padding: '5px 0px', width: '33%'}}>
                    <img src={'https://s2.coinmarketcap.com/static/img/coins/64x64/'+ crypto[key].id  + '.png'} style={{marginTop:'10px' }}/>                      
                  </div>
                </div>        
                <div style={{borderTop: '1px solid #e1e5ea', clear: 'both'}}>
                  <div style={{textAlign: 'center', float: 'left', width: '33.3%', fontSize: 12, padding: '12px 0 16px 0', lineHeight: '1.25em'}}>                        
                    <h4>Price </h4>                   
                      <span style={{fontSize: '14px', color:'green', fontWeight:'700'}}> {crypto[key].quotes["USD"].price.toFixed(2)}
                        <span style={{fontSize: '9px'}}> USD</span>
                      </span>
                  </div>
                  <div style={{textAlign: 'center', float: 'left', width: '33.3%', fontSize: 12, padding: '12px 0 16px 0',  lineHeight: '1.25em'}}>                        
                    <h4>Change (24h) </h4>                    
                    <span style={{fontSize: '14px'}}>{crypto[key].quotes["USD"].percent_change_24h}
                    </span>
                  </div>
                  <div style={{textAlign: 'center', float: 'left', width: '33.3%', fontSize: 12, padding: '12px 0 16px 0',  lineHeight: '1.25em'}}>                        
                    <h4>Change (7d) </h4>                    
                    <span style={{fontSize: '14px'}}>{crypto[key].quotes["USD"].percent_change_7d}
                    </span>
                  </div>
                </div>
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
