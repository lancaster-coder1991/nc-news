import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default class NavBar extends Component {
  state = {
    topics: [],
    selected: "",
  };

  componentDidMount() {
    axios
      .get("https://georges-nc-news.herokuapp.com/api/topics")
      .then((topics) => {
        this.setState({ topics: topics.data.topics });
      });
  }

  renderNavItems = () => {
    return this.state.topics.map((topic, index) => {
      return (
        <Link key={index} to={`/topics/${topic.slug}`}>
          {`${this.props.capitalise(topic.slug)}`}
        </Link>
      );
    });
  };

  render() {
    return <nav>{this.renderNavItems()}</nav>;
  }
}
