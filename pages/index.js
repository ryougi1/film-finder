import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Search, MovieDisplay, Heading } from '../components';
import { getTrending } from '../lib';
import { mixins } from '../styles';

export async function getServerSideProps() {
  const trendingMovies = await getTrending();
  return { props: { trendingMovies } };
}

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  overflow-y: scroll;
`;

const Home = ({ trendingMovies }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const search = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      const sanQuery = query.replace(/\s/g, '+');
      router.push('/search/[query]/[pg]', `/search/${sanQuery}/1`);
    }
  };

  return (
    <StyledContainer>
      <Head title="Film Finder" />
      <Search handleInput={handleInput} search={search} />
      <Heading value="Trending right now: " />
      <MovieDisplay movies={trendingMovies} />
    </StyledContainer>
  );
};

Home.propTypes = {
  trendingMovies: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
