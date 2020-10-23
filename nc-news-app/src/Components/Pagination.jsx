import React, { Component } from "react";
import { checkNoArticlePages } from "../axios";

export default class Pagination extends Component {
  state = {
    pages: 0,
  };

  componentDidMount() {
    checkNoArticlePages().then((res) => {
      this.setState({ pages: Math.ceil(res.data.articles.length / 5) });
    });
  }

  renderPageButtons = () => {
    const arr = new Array(this.state.pages).fill("x");
    return arr.map((element, index) => {
      return (
        <button
          key={index + 1}
          value={index + 1}
          onClick={() => this.props.updatePage(index + 1)}
        >
          {index + 1}
        </button>
      );
    });
  };

  render() {
    return (
      <>
        <button
          disabled={this.props.currentPage === 1}
          onClick={() => this.props.updatePage(this.props.currentPage - 1)}
        >
          {"<"}
        </button>
        {this.renderPageButtons()}
        <button
          disabled={this.props.currentPage === this.state.pages}
          onClick={() => this.props.updatePage(this.props.currentPage + 1)}
        >
          {">"}
        </button>
      </>
    );
  }
}
