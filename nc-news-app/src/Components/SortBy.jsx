import React, { Component } from "react";

export default class SortBy extends Component {
  render() {
    return (
      <label htmlFor="sort_by">
        Sort Articles By:
        <select onChange={this.props.updateSorting} name="sort_by" id="">
          <option value="created_at" className="desc">
            Newest First
          </option>
          <option value="created_at" className="asc">
            Oldest First
          </option>
          <option value="comment_count" className="desc">
            No. Of Comments
          </option>
          <option value="votes" className="desc">
            Highest Voted
          </option>
        </select>
      </label>
    );
  }
}
