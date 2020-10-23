import React, { Component } from "react";
import {
  getCommentsByArticleId,
  createCommentByArticleId,
  deleteCommentByArticleId,
} from "../axios";
import CommentCard from "./CommentCard";
import Pagination from "./Pagination";
import SortBy from "./SortBy";

export default class CommentList extends Component {
  state = {
    comments: [],
    sorting: "created_at",
    order: "desc",
    commentToAdd: "",
    isLoading: true,
    user: "jessjelly",
    errorMsg: "",
    page: 1,
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.article.article_id !== this.props.article.article_id ||
      prevState.sorting !== this.state.sorting ||
      prevState.order !== this.state.order ||
      prevState.page !== this.state.page
    )
      this.fetchComments();
  }

  fetchComments = () => {
    getCommentsByArticleId(
      this.props.article.article_id,
      this.state.sorting,
      this.state.order,
      this.state.page
    ).then((comments) => {
      this.setState({ comments: comments.data.comments, isLoading: false });
    });
  };

  renderComments = () => {
    return this.state.comments.map((comment) => {
      return (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          user={this.state.user}
          delete={this.deleteComment}
        />
      );
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
    this.setState({ commentToAdd });
  };

  addComment = () => {
    if (!this.state.commentToAdd) {
      this.setState({ errorMsg: "Please enter a comment!" });
    } else {
      createCommentByArticleId(
        this.props.article.article_id,
        this.state.commentToAdd
      ).then(() => {
        this.fetchComments();
        this.setState({ errorMsg: "" });
      });
    }
  };

  updatePage = (page) => {
    this.setState({ page });
  };

  deleteComment = (comment_id) => {
    deleteCommentByArticleId(comment_id).then(() => this.fetchComments());
  };

  render() {
    if (this.state.isLoading) return <div>Loading</div>;
    return (
      <div id="comment_list">
        <h3 id="comments_header">Comments</h3>
        <SortBy updateSorting={this.updateSorting} class="comments" />
        {this.renderComments()}
        <div id="comment_pagination_buttons">
          <Pagination
            updatePage={this.updatePage}
            type={"comments"}
            currentPage={this.state.page}
            noOfComments={this.state.comments.length}
            articleId={this.props.article.article_id}
          />
        </div>
        <form id="post_comment_form">
          <h4 id="post_comment_label">Post Comment:</h4>
          <textarea
            id="post_comment_input"
            type="text"
            onChange={this.updateNewComment}
            value={this.state.commentToAdd}
          />
          <button
            id="post_comment_button"
            type="button"
            onClick={() => {
              this.addComment();
              this.setState({ commentToAdd: "" });
            }}
          >
            Post
          </button>
          <div id="comment_error_msg">{this.state.errorMsg}</div>
        </form>
      </div>
    );
  }
}
