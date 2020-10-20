import React, { Component } from "react";
import { getArticleById } from "../axios";
import Votes from "./Votes";

export default class ArticlePage extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    getArticleById(this.props.article_id).then((article) => {
      this.setState({ article: article.data.article[0] });
    });
  }

  render() {
    return (
      <main>
        <h2>{this.state.article.title}</h2>
        <article>{this.state.article.body}</article>
        <br />
        <Votes article={this.state.article} />
      </main>
    );
  }
}
