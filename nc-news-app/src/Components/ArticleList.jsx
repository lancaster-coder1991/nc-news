import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import { getArticles } from "../axios";

export default class ArticleList extends Component {
  state = {
    sorting: "created_at",
    order: "desc",
    articles: [],
  };

  componentDidMount() {
    getArticles(null, this.state.sorting, this.state.order).then((res) => {
      this.setState({ articles: res.data.articles });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("previous topic:", prevProps.topic);
    console.log("this.props.topic:", this.props.topic);
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sorting !== this.state.sorting ||
      prevState.order !== this.state.order
    ) {
      getArticles(this.props.topic, this.state.sorting, this.state.order).then(
        (res) => {
          this.setState({ articles: res.data.articles });
        }
      );
    }
  }

  renderArticles = () => {
    return this.state.articles.map((article) => {
      return (
        <ArticleCard
          key={article.article_id}
          article={article}
          capitalise={this.props.capitalise}
          checkUniqueVote={this.props.checkUniqueVote}
        />
      );
    });
  };

  renderTitle = () => {
    if (this.props.topic)
      return <h2>{this.props.capitalise(this.props.topic)}</h2>;
    else return <h2>All Articles</h2>;
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
          {this.renderTitle()}
        </header>
        {this.renderArticles()}
      </main>
    );
  }
}
