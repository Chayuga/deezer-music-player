import Head from "next/head";
import Header from "../components/Header";
import MusicHome from "./music-home";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Music Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MusicHome />
    </div>
  );
}
