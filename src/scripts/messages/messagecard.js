import React, { Component } from "react"
import "./message.css"

export default class MessageCard extends Component {
    render() {
        return (
            <div className="mainMessageContainer">
                <div className="messageEntry">
                    <div className="arrow bottom right"></div>
                    <p>{this.props.message.text}</p>
                    <div class="speech-bubble-ds-arrow"></div>
                </div>
            </div>
        )
    }
}
