import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <input
        className="fullwidth search"
        type="text"
        value={this.props.query}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default Search;
