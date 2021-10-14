import React from "react";
import Head from "next/head";
import Header from "../components/Header";

function MusicDetails() {
  return (
    <div>
      <Head>
        <title>Deezer Music Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Music Details Card */}
      <p>I am a music Deatils</p>
    </div>
  );
}

export default MusicDetails;
