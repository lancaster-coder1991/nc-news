import React, { Component } from "react";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";

export default class CommentCard extends Component {
  showDeleteButton = () => {
    if (this.props.comment.author === this.props.user)
      return (
        <button
          className="comment_card_delete"
          onClick={() => {
            const r = window.confirm(
              "Are you sure you want to delete this comment?"
            );
            if (r) this.props.delete(this.props.comment.comment_id);
          }}
        >
          Delete Comment
        </button>
      );
  };

  render() {
    return (
      <div className="comment_card">
        <span className="comment_author">{this.props.comment.author}</span>
        <Votes class="comment_card" data={this.props.comment} />
        <span className="comment_body">{this.props.comment.body}</span>
        <span className="comment_created_at">
          {reformatDate(this.props.comment.created_at)}
        </span>
        {this.showDeleteButton()}
      </div>
    );
  }
}
