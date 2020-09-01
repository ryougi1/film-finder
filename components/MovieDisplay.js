/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import { mixins } from '../styles';

const StyledCardContainer = styled.section`
  ${mixins.flexCenter};
  flex-wrap: wrap;
  margin: 0px 25px 10px 25px;
`;

const StyledAnchor = styled.a`
  width: 20%;
  padding: 5px;
  margin: 10px;
`;

const MovieDisplay = ({ movies }) => (
  <StyledCardContainer>
    {movies &&
      movies.results.map(({ id, title, release_date, poster_path }) => (
        <Link href="/movies/[id]" as={`/movies/${id}`} key={id}>
          <StyledAnchor>
            <Card
              key={id}
              title={title}
              releaseDate={release_date}
              posterLink={
                poster_path === null
                  ? '/travolta.png'
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
            />
          </StyledAnchor>
        </Link>
      ))}
  </StyledCardContainer>
);

MovieDisplay.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieDisplay;
