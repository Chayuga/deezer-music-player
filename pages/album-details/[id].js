import React, { Component } from "react";
import * as actions from "../../axios/index";

class AlbumDetails extends Component {
  // state = {
  //   album: "",
  //   tracks: [],
  // };

  // componentDidMount() {
  //   actions.getAlbum(this.props.match.params.id).then((album) => {
  //     this.setState({
  //       album,
  //       tracks: album.tracks.data,
  //     });
  //   });
  // }

  render() {
    console.log(this.state);
    return <div>I have details, My id id is </div>;
  }
}

export default AlbumDetails;
