import React, { Component } from "react";
import Head from "next/head";
import * as actions from "../../axios";
import Header from "../../components/Header";
import { MusicNoteIcon } from "@heroicons/react/outline";
import MusicHome from "../../components/MusicHome";
class AlbumDetails extends Component {
  state = {
    album: "",
    tracks: [],
  };

  componentDidMount() {
    actions.getAlbum(this.props.match.params.id).then((album) => {
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
            <figcaption>Title: {track.title}</figcaption>
            <audio controls src={track.preview}>
              <code>audio</code> html element.
            </audio>
          </figure>
        ))
      : null;
  };

  renderAlbum = () => {
    const { album } = this.state;

    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="Cover Picture"
          class="object-cover object-center h-full w-full"
          src={album.cover_big}
        />
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div>{album.title}</div>
        <span>{album.release_date}</span>
        <div>{this.renderTracks()}</div>
        <div className="flex justify-between items-center px-6 py-3 bg-gray-900 align-middle">
          <div className="flex ">
            <MusicNoteIcon className="h-5 w-5 text-gray-500" />
            <h1 className="mx-3 text-lg font-semibold text-white">
              {/* {album.artist.name} */}
            </h1>
          </div>
        </div>
      </div>
    </div>;
  };

  render() {
    return (
      <div>
        <Head>
          <title>Music Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        {/* Details Screen */}
        <div className="text-3xl font-semibold max-w-6xl mx-5  xl:mx-auto sticky top-18 bg-gray-400">
          {this.renderAlbum()}
        </div>
        <MusicHome />
      </div>
    );
  }
}
export default AlbumDetails;
