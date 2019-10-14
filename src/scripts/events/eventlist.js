import React, { Component } from "react";
import APImanager from "../../modules/apimanager";
import EventsCard from "../../scripts/events/eventcard";


class EventsList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    APImanager.getAll("events").then(events => {
      this.setState({
        events: events
      });
    });
  };

  deleteEvent = id => {
    APImanager.delete("events", id).then(() => {
      APImanager.getAll("events").then(newEvent => {
        this.setState({
          events: newEvent
        });
      });
    });
  };

  render() {

    return (
      <>
        <div>
          <h2 className="eventsHeader">Coven Gatherings</h2>
          <section>
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push("/events/new");
              }}
            >
              Enter Gathering
            </button>
          </section>
        </div>
        <div>
          {this.state.events.map(event => (
            <EventsCard
              key={event.id}
              event={event}
              deleteEvent={this.deleteEvent}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default EventsList;
