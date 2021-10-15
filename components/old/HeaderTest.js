import Image from "next/image";
import {
  PlusCircleIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import * as actions from "../../axios";
import { HomeIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { Component } from "react";

class Header extends Component {
  state = {
    albums: [],
    term: "",
  };
  componentDidMount() {
    actions.getAlbums().then((item) =>
      this.setState({
        albums: item,
      })
    );
  }

  searchAlbums = (term) => {
    actions.getAlbums().then((item) =>
      this.setState({
        albums: item,
      })
    );
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
    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
          {/* Left */}
          <div className="relative items-center inline-grid cursor-pointer ">
            <Image
              className="rounded-full cursor-pointer"
              src="http://chayugadesigns.com/images/profile-2.jpg"
              alt="Profile Picture"
              height="56px"
              width="56px"
            />
          </div>

          {/* Middle - Search input field */}
          <div>
            {/* import search Bar component */}
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
          </div>

          {/* Right */}
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="navBtn" />
            <MenuIcon className="h-6 md:hidden cursor-pointer " />

            <div className="relative navBtn">
              <PaperAirplaneIcon className="navBtn rotate-45" />
              <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                3
              </div>
            </div>

            <PlusCircleIcon className="navBtn" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
