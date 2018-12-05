import React, { Component} from 'react'

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
              <a href="/" className="result-btn active"> Create account to keep track of all your records </a>
              <a href="/" className="result-btn"> Check Another Transaction </a>
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
