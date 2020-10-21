import React, { Component } from "react";
import { updateVotesById } from "../axios";

export default class Votes extends Component {
  state = {
    no_of_increments: 0,
    dataType: this.props.data.comment_id ? "comments" : "articles",
  };

  updateVoteCount = (data) => {
    const id = data.comment_id ? data.comment_id : data.article_id;
    updateVotesById(id, this.state.dataType).then(() => {
      this.setState((prevState) => {
        return { no_of_increments: prevState.no_of_increments + 1 };
      });
    });
  };

  render() {
    return (
      <div className={`${this.props.class}_vote_component`}>
        <span>
          Votes: {this.props.data.votes + this.state.no_of_increments}
        </span>
        <button
          className="vote_button"
          onClick={() => this.updateVoteCount(this.props.data)}
        >
          Vote!
        </button>
      </div>
    );
  }
}
