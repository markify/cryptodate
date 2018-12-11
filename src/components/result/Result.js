import React, { Component} from 'react'
import Loader from '../layout/Loader';
import { Link } from 'react-router-dom';
class Result extends Component {
    constructor () {
        super()
        this.state = {
        }
        this.checkGains = this.checkGains.bind(this)
      }
      checkGains(){
        const {percent} = this.props.globalState.totalStatus
    
        if(this.props.globalState.status === 'gain'){
          return `You made ${percent}% profit`
        } else {
          return `You loss ${percent}% of your initial investment`
        }
    }
  render () {
    const {dnewPrice, cnewPrice} = this.props.globalState.totalStatus
    if (dnewPrice === undefined || cnewPrice === undefined) {
			return <Loader/>;
		}
    return (
        <section id='results'>
          <div className="container">
            <div className="col-md-12">
              <div className="ads">

              </div>
            </div>
            <div className="col-md-12">
              <h2>Your ${dnewPrice} dollar investment is now </h2>
              <h1> ${cnewPrice} </h1>
              <h4> {this.checkGains()}</h4>
              <Link to="/login"  className="result-btn active">Login with google to keep track of all your records</Link>
              <Link to="/" className="result-btn">Check Another Transaction </Link>
            </div>
            <div className="col-md-12">
              <div className="ads">
              </div>
            </div>
          </div>
        </section>
    )
  }
}
export default Result;
