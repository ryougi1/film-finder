import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Search, MovieDisplay } from '../components';
import { getTrending } from '../lib/movies';

export async function getServerSideProps() {
  const trendingMovies = await getTrending();
  return { props: { trendingMovies } };
}

const Home = ({ trendingMovies }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const search = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      const sanQuery = query.replace(/\s/g, '+');
      router.push('/search/[query]', `/search/${sanQuery}`);
    }
  };

  return (
    <main>
      <Head title="Film Finder" />
      <Search handleInput={handleInput} search={search} />
      <MovieDisplay movies={trendingMovies} />
    </main>
  );
};

Home.propTypes = {
  trendingMovies: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
