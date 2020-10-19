import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
    return (
      <div className="article_card">
        <span className="article_title">{this.props.article.title}</span>
        <span className="article_topic">
          {this.props.capitalise(this.props.article.topic)}
        </span>
        <span className="article_author">{`Author:${this.props.article.author}`}</span>
        <span className="article_created_at">
          {this.props.article.created_at
            .toString()
            .replace(/:\d{2}\.\d{3}Z/, "")
            .replace("T", "  ")}
        </span>
        <span>Votes component</span>
      </div>
    );
  }
}
