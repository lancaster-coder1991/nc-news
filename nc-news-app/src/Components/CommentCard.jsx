import React, { Component } from "react";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";
import { updateCommentBody } from "../axios";

export default class CommentCard extends Component {
  state = {
    editing: false,
    updatedComment: "",
  };

  showDeleteAndEditButtons = () => {
    if (this.props.comment.author === this.props.user)
      return (
        <div className="user_comment_buttons">
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
          <button
            className="comment_card_edit"
            onClick={() => {
              this.setState({ editing: true });
            }}
          >
            Edit Comment
          </button>
        </div>
      );
  };

  editText = () => {
    if (this.state.editing)
      return (
        <>
          <textarea
            onChange={(e) => {
              this.setState({ updatedComment: e.target.value });
            }}
            id="edit_comment_textarea"
          >
            {this.props.comment.body}
          </textarea>
          <div className="edit_comment_buttons">
            <button
              onClick={() => {
                updateCommentBody(
                  this.props.comment.comment_id,
                  this.state.updatedComment
                ).then(() => {
                  this.setState({ editing: false });
                  this.props.fetchComments();
                });
              }}
            >
              Save
            </button>
            <button onClick={() => this.setState({ editing: false })}>
              Cancel
            </button>
          </div>
        </>
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
        {this.showDeleteAndEditButtons()}
        {this.editText()}
      </div>
    );
  }
}
