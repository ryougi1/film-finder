import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Search, MovieDisplay, Heading } from '../../../components';
import { searchMovie } from '../../../lib';
import { mixins, theme } from '../../../styles';

const { colors } = theme;

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

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  ${mixins.flexBetween};
  min-width: 300px;
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
  background: ${colors.white};
  color: ${colors.black};
  font-size: 1.5em;
  padding: 0.25em 1em;
  border-radius: 4px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:disabled {
    visibility: hidden;
  }
`;

const SearchResult = ({ query, movies, currPage, totPage, totResults }) => {
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

  const getRange = () => {
    return `Showing ${currPage * 20 - 19} - ${
      currPage * 20
    } of ${totResults} results`;
  };

  const getPage = () => {
    return `Page: ${currPage} of ${totPage}`;
  };

  return (
    <StyledContainer>
      <Head title="Film Finder" />
      <Search handleInput={handleInput} search={search} />
      <Heading value={`Your search: "${query.replace(/\+/g, ' ')}"`} />
      <h3>{getRange()}</h3>
      <MovieDisplay movies={movies} />
      <h3>{getPage()}</h3>
      <StyledButtonContainer>
        <StyledButton type="button" onClick={prevPage} disabled={currPage <= 1}>
          Prev
        </StyledButton>
        <StyledButton
          type="button"
          onClick={nextPage}
          disabled={currPage === totPage}
        >
          Next
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
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
