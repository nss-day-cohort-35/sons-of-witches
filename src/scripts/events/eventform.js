import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import APIManager from "../../modules/apimanager";

 class EventForm extends Component {
  state = {
    title: "",
    date: "",
    location: "",
    time: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  newEvent = e => {
    if (
      localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null
    ) {
      let userId = sessionStorage.getItem("credentials");

      let event = {
        title: this.state.title,
        date: this.state.date,
        location: this.state.location,
        time: this.state.time
      };
      APIManager.post("events", event).then(() =>
        this.props.history.push("/events")
      );
    }
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label className="titleName">Title:</label>
            <input
              type="text"
              placeholder="Enter Title Here"
              id="title"
              onChange={this.handleFieldChange}
            ></input>
            <label className="dateName">Date:</label>
            <input
              type="date"
              id="date"
              onChange={this.handleFieldChange}
            ></input>
            <label className="locationName">Location:</label>
            <input
              type="text"
              placeholder="Enter Location Here"
              id="location"
              onChange={this.handleFieldChange}
            ></input>
            <label className="eventTime">Time:</label>
            <input
                type="time"
                required
                onChange={this.handleFieldChange}
                id="time"
                value={this.state.time}
              />
          </fieldset>
          <button type="button" onClick={this.newEvent}>
            Save Gathering
          </button>
        </form>
      </div>
    );
  }
}

export default EventForm;