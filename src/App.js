import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { all } from 'q';
import ApplicationViews from "./scripts/applicationViews/applicationviews";
import NavBar from "./scripts/nav/navbar";
import { Route, withRouter, Redirect} from "react-router-dom";
import './styles/main.css';
class App extends Component {
  state = {
    user: "",
    currentUser: ""
  };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  isRemembered = () => localStorage.getItem("credentials") !== null;

  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: true,
      currentUser: this.getUser()

    });
  };

  getUser = () => {
    if(this.isAuthenticated){
      return parseInt(sessionStorage.getItem("credentials"))
    } else if(this.isRemembered){
      return parseInt(localStorage.getItem("credentials"))
    } else {
      return <Redirect to="/login" />
    }
  }

  rememberMe = user => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(user))
      this.setState({
        user: true,
        currentUser: this.setUser()
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
        <NavBar user={this.state.user} clearUser={this.clearUser} {...this.props}/>
        <ApplicationViews currentUser={this.state.currentUser} rememberMe={this.rememberMe} user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default App;
