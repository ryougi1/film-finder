import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Search, MovieDisplay } from '../../components';
import { searchMovie } from '../../lib/movies';

export async function getServerSideProps({ params }) {
  const movieResults = await searchMovie(params.query);
  return { props: { movieResults } };
}

const SearchResult = ({ movieResults }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const search = async (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      const sanQuery = query.replace(/\s/g, '+');
      router.push('/search/[query]', `/search/${sanQuery}`);
    }
  };

  return (
    <main>
      <Head title="Film Finder" />
      <Search handleInput={handleInput} search={search} />
      <MovieDisplay movies={movieResults} />
    </main>
  );
};

SearchResult.propTypes = {
  movieResults: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SearchResult;
