import React, { Component } from "react";
import { SearchIcon } from "@heroicons/react/outline";

class SearchBar extends Component {
  state = {
    term: "",
  };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  submitSearch = (event) => {
    event.preventDefault();
    let { term } = this.state;
    this.props.searchAlbums(term);
  };

  render() {
    console.log(this.state);

    return (
      <form onSubmit={(event) => this.submitSearch(event)}>
        <div className="relative mt-1 p-3 rounded-md">
          <button className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </button>
          <input
            className="bg-gray-100 block w-full pl-10 p-2 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md "
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={(event) => this.handleInputChange(event)}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
