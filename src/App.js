import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { all } from 'q';
import ApplicationViews from "./scripts/applicationViews/applicationviews";
import NavBar from "./scripts/nav/navbar";
import { Route, withRouter, Redirect} from "react-router-dom";

class App extends Component {
  state = {
    user: ""
  };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  isRemembered = () => localStorage.getItem("credentials") !== null;

  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: this.isAuthenticated()
    });
  };

  rememberMe = user => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(user))
      this.setState({
        user: this.isRemembered()
      });
  }

  clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();

		this.setState({
			user: this.isAuthenticated()
		});
  };
  
  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser}/>
        <ApplicationViews rememberMe={this.rememberMe} user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default App;
