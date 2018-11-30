import React, { Component} from 'react'

class Result extends Component {

  render () {

    return (
        <section id='results'>
            <div className="container">
            <div className="col-md-12">
                <div className="ads">

                </div>
            </div>
            <div className="col-md-12">
                <h2>Your dollar investment is now </h2>
                <h1> Your net profit % percent </h1>
                <h4> Your net lost</h4>
                <a href="#" className="result-btn active">
                Create account to keep track of all your records
                </a>
                <a href="#" className="result-btn">
                Check Another Transaction
                </a>
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
