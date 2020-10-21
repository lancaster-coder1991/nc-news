import React, { Component } from "react";
import { convertToCapitalised } from "../utils/utils";

export default class SortBy extends Component {
  addCommentCountOption = () => {
    if (this.props.class === "articles") {
      return (
        <option value="comment_count" className="desc">
          No. Of Comments
        </option>
      );
    }
  };

  render() {
    return (
      <label className={`${this.props.class}_sort_by`} htmlFor="sort_by">
        {`Sort ${convertToCapitalised(this.props.class)} By:`}
        <select onChange={this.props.updateSorting} name="sort_by" id="">
          <option value="created_at" className="desc">
            Newest First
          </option>
          <option value="created_at" className="asc">
            Oldest First
          </option>
          {this.addCommentCountOption()}
          <option value="votes" className="desc">
            Highest Voted
          </option>
        </select>
      </label>
    );
  }
}
