import { Component } from "react";
import * as actions from "../axios";
import {
  ClockIcon,
  MusicNoteIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";

import Link from "next/link";

class Albums extends Component {
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
  renderAlbums = () => {
    const { albums } = this.state;
    return albums && albums.length
      ? albums.map((item, index) => (
          <div
            key={index}
            className="max-w-xs overflow-hidden my-5 justify-center bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover object-center w-[450px] h-56"
              src={item.album.cover_big}
              alt="album cover image"
            />

            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800  dark:text-white truncate">
                {item.title}
              </h1>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <ClockIcon className="h-5 w-5 text-gray-500" />

                <h1 className="px-2 text-sm">{item.duration} Seconds</h1>
              </div>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <ViewBoardsIcon className="h-5 w-5 text-gray-500" />

                <h1 className="px-2 text-sm">{item.rank}</h1>
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-3 bg-gray-900 align-middle">
              <div className="flex ">
                <MusicNoteIcon className="h-5 w-5 text-gray-500" />

                <h1 className="mx-3 text-lg font-semibold text-white">
                  {item.artist.name}
                </h1>
              </div>
              <button
                Link
                to={`/album-details/${item.album.id}`}
                type="submit"
                className="mx-3 text-sm font-normal bg-gray-200 text-black p-2 rounded-md hover:scale-125 hover:bg-purple-600 hover:text-white transform transition-all ease-out"
              >
                Details
              </button>
            </div>
          </div>
        ))
      : null;
  };

  render() {
    console.log(this.state);
    return (
      <div className="flex justify-between max-w-6xl mx-5  xl:mx-auto pt-2 flex-wrap">
        {this.renderAlbums()}
      </div>
    );
  }
}

export default Albums;
