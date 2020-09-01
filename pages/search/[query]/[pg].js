import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Search, MovieDisplay } from '../../../components';
import { searchMovie } from '../../../lib';

export async function getServerSideProps({ params }) {
  const res = await searchMovie(params.query, params.pg);
  return {
    props: {
      query: params.query,
      movies: res,
      currPage: +params.pg,
      totPage: +res.total_pages,
      totResults: +res.total_results,
    },
  };
}

const SearchResult = ({ query, movies, currPage, totPage, totResults }) => {
  console.log(totResults);
  const [newQuery, setQuery] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const search = (e) => {
    if (e.key === 'Enter' && newQuery.length > 0) {
      const sanQuery = newQuery.replace(/\s/g, '+');
      router.push('/search/[query]/[pg]', `/search/${sanQuery}/1`);
    }
  };

  const nextPage = () => {
    router.push('/search/[query]/[pg]', `/search/${query}/${currPage + 1}`);
  };

  const prevPage = () => {
    router.push('/search/[query]/[pg]', `/search/${query}/${currPage - 1}`);
  };

  // TODO: Prev and Next validation
  return (
    <main>
      <Head title="Film Finder" />
      <Search handleInput={handleInput} search={search} />
      <div>Searched for: {query}</div>
      <div>Total results: {totResults}</div>
      <MovieDisplay movies={movies} />
      <div>
        Page: {currPage} of {totPage}
      </div>
      <button type="button" onClick={prevPage} disabled={currPage <= 1}>
        Prev
      </button>
      <button type="button" onClick={nextPage} disabled={currPage === totPage}>
        Next
      </button>
    </main>
  );
};

SearchResult.propTypes = {
  query: PropTypes.string.isRequired,
  movies: PropTypes.oneOfType([PropTypes.object]).isRequired,
  currPage: PropTypes.number.isRequired,
  totPage: PropTypes.number.isRequired,
  totResults: PropTypes.number.isRequired,
};

export default SearchResult;
