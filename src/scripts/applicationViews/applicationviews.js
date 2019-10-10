import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../../home/home'
import Login from '../auth/login'
import UserForm from '../auth/registerForm'
import LoginForm from '../auth/loginForm'
import MessageList from "../messages/messagelist"

export default class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    isRemebered = () => localStorage.getItem("credentials") !== null

render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if(this.isAuthenticated || this.isRemebered){
            return <Home />
          } else {
            return <Redirect to="/login" />;
          }
        }} />

            <Route exact path="/login" render={props => {
              if(this.isAuthenticated || this.isRemebered){
                return <Login {...props} />
              } else {
                return <Redirect to="/login" />
              }
        }} />
            <Route exact path="/login/register-form" render={props => {
              if(this.isAuthenticated || this.isRemebered){
                return <UserForm rememberMe={this.props.remeberMe} setUser={this.props.setUser} {...props} />
              } else {
                return <Redirect to="/login" />
              }
        }} />
          <Route exact path="/login/login-form" render={props => {
            if(this.isAuthenticated || this.isRemebered){
              return <LoginForm rememberMe={this.props.rememberMe} setUser={this.props.setUser} {...props} />
            } else {
              return <Redirect to="/login" />
            }
        }} />
          <Route exact path="/chat" render={props => {
            if(this.isAuthenticated || this.isRemebered){
              return <MessageList {...props} />
            } else {
              return <Redirect to="/login" />
             }
        }} />



    </React.Fragment> ) }}