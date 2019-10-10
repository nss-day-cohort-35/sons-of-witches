import APIManager from "../../modules/apimanager";
import React, { Component } from "react";
import MessageCard from "./messagecard";
import "./message.css"

export default class MessageList extends Component {
  state = {
    messages: []
  };
  getData = () => {
    APIManager.getAll("messages").then(messages =>
      this.setState({
        messages: messages
      })
    );
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <div className="messageBox">
          <label className="messageLabel">Write a new Messages</label>
          <input type="text" className="messageInput"></input>
          <button type="button" className="messageBtn">Send</button>
          {this.state.messages.map(message =>
            <MessageCard
              key={message.id}
              message={message}
              messages={this.state.messages}
              {...this.props}
            />
          )}
        </div>
      </>
    );
  }
}
