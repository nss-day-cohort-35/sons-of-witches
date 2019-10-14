import React, { Component } from "react";
import "./event.css";

class EventsCard extends Component {
  render() {
    return (
      <div className="eventsContainer">
        <p className="sectionTitle">
          <b>
            <u>Title:</u>
          </b>
        </p>
        <p>{this.props.event.title}</p>
        <p className="sectionTitle">
          <b>
            <u>Date:</u>
          </b>
        </p>
        <p>{this.props.event.date}</p>
        <p className="sectionTitle">
          <b>
            <u>location:</u>
          </b>
        </p>
        <p>{this.props.event.location}</p>
        <p className="sectionTitle">
          <b>
            <u>Time:</u>
          </b>
        </p>
        <p>{this.props.event.time}</p>
        <div className="eventsButtons">
          <button
            type="deleteEventsbutton"
            onClick={() => this.props.deleteEvent(this.props.event.id)}
          >
            Delete
          </button>
          <button
            type="editEventsbutton"
            onClick={() => {
              this.props.history.push(`/events/${this.props.event.id}/edit`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default EventsCard;
