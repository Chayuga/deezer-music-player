import React, { Component, useEffect } from "react";
import Header from "../../components/Header";
import * as actions from "../../axios/index";
import MusicHome from "../music-home";
import { MusicNoteIcon } from "@heroicons/react/outline";

class AlbumDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      artist: props.artist,
      album: "",
      tracks: [],
    };
  }

  componentDidMount() {
    actions.getAlbum(this.state.id).then((album) => {
      this.setState({
        album,
        tracks: album.tracks.data,
      });
    });
  }

  renderTracks = () => {
    const { tracks } = this.state;

    return tracks && tracks.length
      ? tracks.map((track, index) => (
          <div class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <figure key={index}>
                <figcaption>Play: {track.title}</figcaption>
                <audio className="min-w-full" controls src={track.preview}>
                  Navigate support
                  <code>audio</code> html element.
                </audio>
              </figure>
            </div>
          </div>
        ))
      : null;
  };

  renderAlbum = () => {
    const { album } = this.state;
    return (
      <div className="flex flex-wrap items-center justify-between mx-auto">
        {/*  Cover */}
        <div className=" px-1 md:w-3/4 lg:my-4 lg:w-1/3 ">
          {/* Cover Section*/}
          <article className=" bg-cover justify-center overflow-hidden rounded-lg shadow-lg md:w-[300px] lg:w-[500px] xl:w-[700px] h-[500px] ">
            <img
              alt="Album Cover"
              className="block h-full w-full"
              src={album.cover_big}
            />
          </article>
          {/* <!-- END Cover Section --> */}
        </div>
        {/* END Cover*/}
        {/* Details  */}
        <div className="rounded-lg shadow-lg ">
          <div class="container flex flex-col mx-auto w-full items-center justify-center h-[500px]">
            <header class="flex px-4 py-5 sm:px-6 w-full justify-between leading-tight border-solid border-2 border-gray-500 dark:bg-gray-800 bg-gray-300 shadow rounded-t-md ">
              <div className="text-lg">
                <h1 className="no-underline hover:underline text-black">
                  Title: {album.title}
                </h1>
              </div>
              <div>
                <p className="text-grey-darker text-sm">Release Date</p>
                <p className="text-grey-darker text-sm">{album.release_date}</p>
              </div>
            </header>
            <div class="flex flex-col flex-1 px-4 py-5 sm:px-6 w-full justify-between border-solid border-l-2 border-r-2 border-gray-500 dark:bg-gray-800 bg-white shadow overflow-scroll">
              {this.renderTracks()}
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4 bg-gray-900 px-4 py-5 sm:px-6 w-full  border-solid border-2 border-gray-500 dark:bg-gray-800 shadow mb-2 rounded-b-md">
              {/* <p className="ml-2 text-sm">{album.artist.name}</p> */}
              <MusicNoteIcon className="h-5 w-5 text-white" />
              <span className="text-white">Like</span>
            </footer>
          </div>
        </div>
        {/* END Details */}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header />
        <div className="flex justify-between max-w-6xl mx-5  xl:mx-auto pt-2 flex-wrap ">
          {this.renderAlbum()}
        </div>
      </div>
    );
  }
}

//Add this tow functions
export async function getStaticProps(context) {
  return {
    props: {
      id: context.params.id,
    }, // will be passed to the page component as props
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default AlbumDetails;
