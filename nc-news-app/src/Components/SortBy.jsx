import React, { Component } from "react";

export default class SortBy extends Component {
  render() {
    return (
      <label htmlFor="sort_by">
        Choose Sorting
        <select name="sort_by" id=""></select>
      </label>
    );
  }
}
