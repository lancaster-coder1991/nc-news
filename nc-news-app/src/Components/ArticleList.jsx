import axios from "axios";
import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

export default class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      const topicQuery =
        this.props.selected === "All Articles"
          ? ""
          : `?topic=${this.props.selected.toLowerCase()}`;
      axios
        .get(
          `https://georges-nc-news.herokuapp.com/api/articles${topicQuery}
    `
        )
        .then((res) => {
          this.setState({ articles: res.data.articles }, () => {
            console.log(this.state.articles);
          });
        });
    }
  }

  renderArticles = () => {
    return this.state.articles.map((article) => {
      console.log(article);
      return (
        <ArticleCard article={article} capitalise={this.props.capitalise} />
      );
    });
  };

  render() {
    return (
      <main>
        <header id="article_header">
          <span>Sort List</span>
          <h2>{`${this.props.capitalise(this.props.selected)}`}</h2>
        </header>
        {this.renderArticles()}
      </main>
    );
  }
}
