import React, { Component } from "react";
import Head from "next/head";
import * as actions from "../../axios";
import Header from "../../components/Header";
import Main from "../../components/Main";

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
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src="../images/img_post.jpg"
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AlbumDetails;
