import React, { Component } from "react";
import { getArticleById } from "../axios";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";
import CommentList from "./CommentList";

export default class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    getArticleById(this.props.article_id).then((article) => {
      this.setState({ article: article.data.article[0], isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <>
        <main id="article_main">
          <h2 id="article_page_title">{this.state.article.title}</h2>
          <span id="article_page_author">
            Author: {this.state.article.author}
          </span>
          <article>{this.state.article.body}</article>
          <div id="article_page_blank"></div>
          <span id="article_page_date">
            Date: {reformatDate(this.state.article.created_at)}
          </span>
          <Votes data={this.state.article} />
        </main>
        <CommentList article={this.state.article} />
      </>
    );
  }
}
