import React, { Component } from 'react';


class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(searchTerm) {
    this.props.onSearchUpdate(searchTerm);
  }

  render() {
    return (
      <div className="searchBox">
        Search Box
      </div>
    );
  }
}

export default SearchContainer;
