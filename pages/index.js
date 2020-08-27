import React, { useState } from "react";
import Head from "next/head";
import { Search, MovieDisplay } from "../components";
import { GlobalStyle } from "../styles";
import { getTrending } from "../lib/movies";

export async function getServerSideProps() {
  const trendingMovies = await getTrending();
  return { props: { trendingMovies } };
}

const Home = ({ trendingMovies }) => {
  const [query, setQuery] = useState("");
  const handleInput = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <main>
      <Head title="Film Finder" />
      <GlobalStyle />
      <Search handleInput={handleInput} />
      <MovieDisplay movies={trendingMovies}></MovieDisplay>
    </main>
  );
};

export default Home;
