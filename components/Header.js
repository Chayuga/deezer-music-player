import Image from "next/image";
import {
  PlusCircleIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import * as actions from "../axios";
import { HomeIcon } from "@heroicons/react/solid";
import { Component } from "react";
import Link from "next/link";
// import SearchBar from "./SearchBar";

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

  render() {
    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50 py-2">
        <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
          {/* Left */}
          <Link href="/">
            <a>
              <div className="relative items-center inline-grid cursor-pointer ">
                <Image
                  className="rounded-full cursor-pointer"
                  src="https://www.chayugadesigns.com/images/profile-2.jpg"
                  alt="Profile Picture"
                  height="56px"
                  width="56px"
                />
              </div>
            </a>
          </Link>

          {/* TODO: Add Search bar to the Header*/}
          <div>{/* <SearchBar searchAlbums={this.searchAlbums} /> */}</div>

          {/* Right */}
          <div className="flex items-center justify-end space-x-4">
            <Link href="/">
              <a>
                <HomeIcon className="navBtn" />
              </a>
            </Link>
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
