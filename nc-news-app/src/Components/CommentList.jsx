import React, { Component } from "react";
import { getCommentsByArticleId } from "../axios";
import CommentCard from "./CommentCard";

export default class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    getCommentsByArticleId(this.props.article.article_id).then((comments) => {
      this.setState(
        { comments: comments.data.comments, isLoading: false },
        () => {
          console.log(this.state.comments);
        }
      );
    });
  }

  renderComments = () => {
    return this.state.comments.map((comment) => {
      return <CommentCard key={comment.comment_id} comment={comment} />;
    });
  };

  render() {
    if (this.state.isLoading) return <div>Loading</div>;
    return (
      <div id="comment_list">
        <h3 id="comments_header">Comments</h3>
        {this.renderComments()}
      </div>
    );
  }
}
