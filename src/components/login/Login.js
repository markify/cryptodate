import React, { Component} from 'react'

class Login extends Component {
  state = {
    loggedIn: false
  };

  render () {
    return (
    <React.Fragment>
      <section id="login"  style={{transition:'all 2s ease-in-out', margin:'100px auto'}}>
        <h1 style={{textAlign:'center', color:'white',fontSize:'2rem'}}>Coming soon.</h1>
      </section>
    </React.Fragment>
    )
  }
}
export default Login;
