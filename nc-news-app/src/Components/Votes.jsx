import React, { Component } from "react";
import { updateVotesById } from "../axios";

export default class Votes extends Component {
  state = {
    no_of_increments: 0,
    dataType: this.props.data.comment_id ? "comments" : "articles",
    hasUpVoted: false,
    hasDownVoted: false,
  };

  updateVoteCount = (data, increment) => {
    const id = data.comment_id ? data.comment_id : data.article_id;
    const statePropToChange = increment === 1 ? "hasUpVoted" : "hasDownVoted";
    const actualIncrement =
      (increment === 1 && this.state.hasUpVoted) ||
      (increment === -1 && this.state.hasDownVoted)
        ? increment * -1
        : increment;
    this.setState((prevState) => {
      return {
        no_of_increments: prevState.no_of_increments + actualIncrement,
        [statePropToChange]: !prevState[statePropToChange],
      };
    });
    updateVotesById(id, this.state.dataType, actualIncrement);
  };

  render() {
    return (
      <div className={`${this.props.class}_vote_component`}>
        <span>
          Votes: {this.props.data.votes + this.state.no_of_increments}
        </span>
        <button
          className="up_vote_button"
          onClick={() => this.updateVoteCount(this.props.data, 1)}
        >
          Vote Up
        </button>
        <button
          className="down_vote_button"
          onClick={() => this.updateVoteCount(this.props.data, -1)}
        >
          Vote Down
        </button>
      </div>
    );
  }
}
