import React, { Component, useEffect } from "react";
import Header from "../../components/Header";
import * as actions from "../../axios/index";
import MusicHome from "../music-home";
import { withRouter } from "next/router";

class AlbumDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
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
          <figure key={index}>
            <figcaption>Play: {track.title}</figcaption>
            <audio controls src={track.preview}>
              Navigate support
              <code>audio</code> html element.
            </audio>
          </figure>
        ))
      : null;
  };

  renderAlbum = () => {
    const { album } = this.state;
    return (
      <div className="flex w-screen stick sticky top-16 z-30 bg-white">
        <div className="mx-auto items-center">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {/*  Cover */}
            <div className=" m-1 px-1 md:w-3/4 lg:my-4 lg:px-4 lg:w-1/3 ">
              {/* Cover Section*/}
              <article className=" bg-cover overflow-hidden rounded-lg shadow-lg w-[500px] h-[450px] ">
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
            <div className="my-5 px-1 w-full md:w-1/2 lg:my-12 lg:px-4 lg:w-1/3">
              {/* <!-- Details Section --> */}
              <article className="overflow-hidden rounded-lg shadow-lg w-[400px] h-full">
                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-gray-200">
                  <h1 className="text-lg">
                    <h1 className="no-underline hover:underline text-black">
                      {album.title}
                    </h1>
                  </h1>
                  <div>
                    <p className="text-grey-darker text-sm">Release Date</p>
                    <p className="text-grey-darker text-sm">
                      {album.release_date}
                    </p>
                  </div>
                </header>
                <div>{this.renderTracks()}</div>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4 bg-gray-900">
                  <a
                    className="flex items-center no-underline hover:underline text-white"
                    href="#"
                  >
                    <div>{/* Tracks Here */}</div>
                    {/* <p className="ml-2 text-sm">{album.artist.name}</p> */}
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="text-white">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
              {/* <!-- END Details Section --> */}
            </div>
            {/* END Details */}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header />
        <div className="flex justify-between max-w-6xl mx-5  xl:mx-auto pt-2 flex-wrap">
          {this.renderAlbum()}
        </div>

        <MusicHome />
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
