import React, { Component } from "react";
import { Link } from "@reach/router";
import Votes from "./Votes";
import { reformatDate } from "../utils/utils";

export default class ArticleCard extends Component {
  render() {
    return (
      <div className="article_card">
        <Link
          className="article_title"
          to={`/articles/${this.props.article.topic}/${this.props.article.article_id}`}
        >
          <span>{this.props.article.title}</span>
        </Link>
        <span className="article_topic">
          {this.props.capitalise(this.props.article.topic)}
        </span>
        <span className="article_author">{`Author:${this.props.article.author}`}</span>
        <span className="article_created_at">
          {reformatDate(this.props.article.created_at)}
        </span>
        <span>Comments: {this.props.article.comment_count}</span>
        <Votes
          data={this.props.article}
          checkUniqueVote={this.checkUniqueVote}
        />
      </div>
    );
  }
}
