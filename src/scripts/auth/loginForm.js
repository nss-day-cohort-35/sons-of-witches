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
        let credentials = user.id
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
      
        <div className="box container login">
          <section className="is-centered">
            <p className="title is-4">Join your coven:</p>
            </section>
            <form>
              <div className="field">
                <div className="control">
                <input
                className="input"
                onChange={this.handleFieldChange}
                type="text"
                id="username"
                placeholder="Username"
                required=""
                autoFocus=""
              />
                </div>
              </div>
            
              <div className="field">
              <div className="control">
              <label htmlFor="inputUsername"></label>

              <input
                className="password"
                onChange={this.handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                required=""
              ></input>
              </div>
              </div>
              <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input className="remember checkbox" type="checkbox"/>
                   Remember Me
                </label>
                </div>
                </div>
                <button type="button" className="signIn" onClick={this.handleLogin}>
                  Sign In
                </button>
              
            </form>
            
              </div>
                
                /* <label>Remember Me</label>
                <input type="checkbox" className="remember"></input>
              </div>
              <div>
                <label htmlFor="inputPassword"></label>
                <button type="button" className="signIn" onClick={this.handleLogin}>
                  Sign In
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </form> */
    );
  }
}
