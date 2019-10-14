import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import APIManager from "../../modules/apimanager";

export default class NewsForm extends Component {
  state = {
    title: "",
    url: "",
    synopsis: "",
    date: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  newArticle = e => {
    if (
      localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null
    ) {
      let userId = sessionStorage.getItem("credentials");

      let article = {
        title: this.state.title,
        URL: this.state.url,
        synopsis: this.state.synopsis,
        date: this.state.date
      };
      APIManager.post("articles", article).then(() =>
        this.props.history.push("/news")
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
            <label className="urlName">URL:</label>
            <input
              type="text"
              placeholder="Enter URL Here"
              id="url"
              onChange={this.handleFieldChange}
            ></input>
            <label className="synopsisName">Synopsis:</label>
            <input
              type="text"
              placeholder="Enter Synopsis Here"
              id="synopsis"
              onChange={this.handleFieldChange}
            ></input>
          </fieldset>
          <button type="button" onClick={this.newArticle}>
            Save Article
          </button>
        </form>
      </div>
    );
  }
}
