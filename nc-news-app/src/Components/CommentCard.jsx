import React, { Component } from "react";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";

export default class ArticleCard extends Component {
  render() {
    return (
      <div className="comment_card">
        <span className="comment_author">{this.props.comment.author}</span>
        <Votes data={this.props.comment} />
        <span className="comment_body">{this.props.comment.body}</span>
        <span className="comment_created_at">
          {reformatDate(this.props.comment.created_at)}
        </span>
      </div>
    );
  }
}
