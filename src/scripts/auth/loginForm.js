import React, { Component } from "react";
import APIManager from "../../modules/apimanager";
import { Link, Route, withRouter, Redirect } from "react-router-dom";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    userId: "",
    users: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = () => {
    this.state.users.map(user => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        console.log("here");
        let credentials = {
          username: this.state.username,
          password: this.state.password,
          userId: user.id
        };
        let box = document.querySelector(".remember");
        if(box.checked === true){
          this.props.rememberMe(credentials);
          this.props.history.push("/")
        } else {
          this.props.setUser(credentials);
          this.props.history.push("/");
        }
      } else {
        // return this.props.history.push("/login/register-form");
      }
    });
  };

  getData = e => {
    APIManager.getAll("users").then(users => {
      this.setState({
        users: users
      });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <form>
        <div className="box">
          <fieldset className="bod">
            <h3 className="loginHeader">Join your coven:</h3>
            <div className="formgrid">
              <input
                className="username"
                onChange={this.handleFieldChange}
                type="text"
                id="username"
                placeholder="Username"
                required=""
                autoFocus=""
              />
              <label htmlFor="inputUsername"></label>

              <input
                className="password"
                onChange={this.handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                required=""
              ></input>
              <div>
                <label>Remember Me</label>
                <input type="checkbox" className="remember"></input>
              </div>
              <div>
                <label htmlFor="inputPassword">Password</label>
                <button type="button" onClick={this.handleLogin}>
                  Sign In
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    );
  }
}
