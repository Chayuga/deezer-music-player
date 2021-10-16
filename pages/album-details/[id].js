import React, { Component } from "react";
import Header from "../../components/Header";
import * as actions from "../../axios/index";
import MusicHome from "../music-home";

class AlbumDetails extends Component {
  constructor(props) {
    super(props);
    console.log("props here" + "here");
  }
  state = {
    album: "",
    tracks: [],
  };

  componentDidMount() {
    actions.getAlbum(this.props.id).then((album) => {
      this.setState({
        album,
        tracks: album.tracks.data,
      });
    });
  }

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
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={album.cover_big}
                  />
                </a>

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

export default AlbumDetails;
