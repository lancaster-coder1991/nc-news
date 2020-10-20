import React, { Component } from "react";

export default class Votes extends Component {
  render() {
    return (
      <div>
        <span>Votes: {this.props.article.votes}</span>
        <button>Vote!</button>
      </div>
    );
  }
}
