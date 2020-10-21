import axios from "axios";
import React, { Component } from "react";
import { getCommentsByArticleId } from "../axios";
import CommentCard from "./CommentCard";
import SortBy from "./SortBy";

export default class CommentList extends Component {
  state = {
    comments: [],
    sorting: "created_at",
    order: "desc",
    commentToAdd: "",
    isLoading: true,
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.article_id !== this.props.article_id ||
      prevState.sorting !== this.state.sorting ||
      prevState.order !== this.state.order
    )
      this.fetchComments();
  }

  fetchComments = () => {
    getCommentsByArticleId(
      this.props.article.article_id,
      this.state.sorting,
      this.state.order
    ).then((comments) => {
      this.setState({ comments: comments.data.comments, isLoading: false });
    });
  };

  renderComments = () => {
    return this.state.comments.map((comment) => {
      return <CommentCard key={comment.comment_id} comment={comment} />;
    });
  };

  updateSorting = (e) => {
    const sorting = e.target.value;
    const selectedOption = Array.from(e.target).filter(
      (option) => option.selected
    )[0];
    const order = selectedOption.className;
    this.setState({ sorting, order });
  };

  updateNewComment = (e) => {
    const commentToAdd = e.target.value;
    this.setState({ commentToAdd }, () => {
      console.log(this.state.commentToAdd);
    });
  };

  addComment = () => {
    console.log(this.props.article.article_id);
    axios
      .post(
        `https://georges-nc-news.herokuapp.com/api/articles/${this.props.article.article_id}/comments`,
        { username: "jessjelly", body: this.state.commentToAdd }
      )
      .then(() => this.fetchComments());
  };

  render() {
    if (this.state.isLoading) return <div>Loading</div>;
    return (
      <div id="comment_list">
        <h3 id="comments_header">Comments</h3>
        <SortBy updateSorting={this.updateSorting} class="comments" />
        {this.renderComments()}
        <form
          id="post_comment_form"
          onSubmit={(event) => {
            event.preventDefault();
            this.addComment();
          }}
        >
          <h4 id="post_comment_label">Post Comment:</h4>

          <textarea
            id="post_comment_input"
            type="text"
            onChange={this.updateNewComment}
          />
          <button id="post_comment_button" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}
