import React, { Component } from "react";
import { getArticleById } from "../axios";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";
import CommentList from "./CommentList";
import ErrorDisplay from "./ErrorDisplay";

export default class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    getArticleById(this.props.article_id)
      .then((article) => {
        this.setState({ article: article.data.article[0], isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: {
            status: response.status,
            message: response.data.msg,
          },
          isLoading: false,
        });
      });
  }

  render() {
    const { error } = this.state;
    if (this.state.isLoading) return <div>Loading...</div>;
    if (this.state.error)
      return <ErrorDisplay status={error.status} message={error.message} />;
    return (
      <>
        <main id="article_main">
          <h2 id="article_page_title">{this.state.article.title}</h2>
          <span
            id="article_page_topic"
            className={`article_topic_${this.state.article.topic}`}
          >
            {this.props.capitalise(this.state.article.topic)}
          </span>
          <article>{this.state.article.body}</article>
          <div id="article_page_blank"></div>
          <span id="article_page_author">
            Author: {this.state.article.author}
          </span>
          <span id="article_page_date">
            Date: {reformatDate(this.state.article.created_at)}
          </span>

          <Votes class="article_page" data={this.state.article} />
        </main>
        <CommentList article={this.state.article} />
      </>
    );
  }
}
