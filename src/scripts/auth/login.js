import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
   	<div className="box container login">
				<section className="is-centered">
				{/* <img src={`../../images/signIn.svg`}/> */}
			<img className= "loginImg" src={`./images/login.png`}/>
				</section>
        <Link to="/login/login-form">
          <button type="submit" className="button">Login</button>
        </Link>
        <Link to="/login/register-form">
          <button type="button" className="button">Register</button>
        </Link>
      </div>
      </React.Fragment>
    
    );
  }
}

export default Login;
