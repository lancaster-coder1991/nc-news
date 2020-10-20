import axios from "axios";
import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";

export default class ArticleList extends Component {
  state = {
    sorting: "created_at",
    order: "desc",
    articles: [],
  };

  componentDidMount() {
    const topicQuery =
      this.props.selected === "All Articles"
        ? ""
        : `topic=${this.props.selected.toLowerCase()}`;
    axios
      .get(
        `https://georges-nc-news.herokuapp.com/api/articles?${topicQuery}&sort_by=${this.state.sorting}&order_by=${this.state.order}`
      )
      .then((res) => {
        this.setState({ articles: res.data.articles }, () => {
          console.log(this.state.articles);
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const topicQuery =
      this.props.selected === "All Articles"
        ? ""
        : `topic=${this.props.selected.toLowerCase()}`;
    console.log(
      `topic: ${topicQuery}, sorting: ${this.state.sorting}, order: ${this.state.order}`
    );
    if (
      prevProps.selected !== this.props.selected ||
      prevState.sorting !== this.state.sorting ||
      prevState.order !== this.state.order
    ) {
      axios
        .get(
          `https://georges-nc-news.herokuapp.com/api/articles?${topicQuery}&sort_by=${this.state.sorting}&order_by=${this.state.order}`
        )
        .then((res) => {
          this.setState({ articles: res.data.articles });
        });
    }
  }

  renderArticles = () => {
    return this.state.articles.map((article) => {
      return (
        <ArticleCard
          key={article.id}
          article={article}
          capitalise={this.props.capitalise}
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

  render() {
    return (
      <main>
        <header id="article_header">
          <SortBy updateSorting={this.updateSorting} />
          <h2>{`${this.props.capitalise(this.props.selected)}`}</h2>
        </header>
        {this.renderArticles()}
      </main>
    );
  }
}
