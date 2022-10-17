import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MaxKar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <div className="mt-10" />
        {/* <Trending/> */}
        <div className="mt-20" />
        {/* <CMCtable/> */}
      </div>
    </>
  );
};

export default Home;
