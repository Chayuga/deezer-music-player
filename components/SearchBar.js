import { SearchIcon } from "@heroicons/react/outline";
import React, { Component } from "react";

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
      <form
        className="sticky top-16 z-50"
        onSubmit={(event) => this.submitSearch(event)}
      >
        <div className="relative mt-1 py-2 rounded-md border-gray-500">
          <button
            type="submit"
            className="absolute inset-y-0 pl-3 flex items-center pointer-cursor"
          >
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </button>
          <input
            className="bg-gray-200 block w-full pl-10 p-2 border-gray-500 sm:text-sm  focus:ring-black focus:border-black rounded-md "
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
