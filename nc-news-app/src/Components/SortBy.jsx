import React, { Component } from "react";

export default class SortBy extends Component {
  render() {
    return (
      <label htmlFor="sort_by">
        Choose Sorting
        <select onChange={this.props.updateSorting} name="sort_by" id="">
          <option value="created_at">Newest First</option>
          <option value="created_at" data-order_by="asc">
            Oldest First
          </option>
          <option value="comments">No. Of Comments</option>
          <option value="votes">Highest Voted</option>
        </select>
      </label>
    );
  }
}
