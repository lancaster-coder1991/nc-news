import React, { Component } from "react";
import { updateArticleVotesById } from "../axios";

export default class Votes extends Component {
  state = {
    no_of_increments: 0,
  };

  updateVoteCount = () => {
    updateArticleVotesById(this.props.article.article_id).then(() => {
      this.setState((prevState) => {
        return { no_of_increments: prevState.no_of_increments++ };
      });
    });
  };

  render() {
    return (
      <div>
        <span>
          Votes: {this.props.article.votes + this.state.no_of_increments}
        </span>
        <button onClick={this.updateVoteCount}>Vote!</button>
      </div>
    );
  }
}
