import React, { Component } from "react";

export default class SortBy extends Component {
  render() {
    return (
      <label htmlFor="sort_by">
        Choose Sorting
        <select onChange={this.props.updateSorting} name="sort_by" id="">
          <option value="created_at" className="desc">
            Newest First
          </option>
          <option value="created_at" className="asc">
            Oldest First
          </option>
          <option value="comments" className="desc">
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
