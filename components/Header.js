import {
  PlusCircleIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import * as actions from "../axios";
import { HomeIcon } from "@heroicons/react/solid";
import SearchBar from "./SearchBar";
import { Component } from "react";

class Header extends Component {
  state = {
    albums: [],
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

  render() {
    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
          {/* Left */}
          <div className="relative items-center inline-grid w-24 cursor-pointer ">
            <img
              className="h-10 rounded-full cursor-pointer btn"
              src="./images/profile.jpeg"
              alt="Profile Picture"
            />
          </div>

          {/* Middle - Search input field */}
          <div>
            {/* import search Bar component */}
            <SearchBar searchAlbums={this.searchAlbums} />
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
