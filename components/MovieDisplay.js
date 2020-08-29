/* eslint-disable import/no-cycle */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card } from '../components';
import { mixins } from '../styles';

const StyledMovieContent = styled.div`
  ${mixins.flexBetween}
  padding: 50px 12px;
`;

const StyledCardContainer = styled.div`
  max-width: 550px;
  width: 100%;
  font-size: 12px;
  text-align: center;
`;

const MovieDisplay = ({ movies }) => (
  <StyledMovieContent>
    {movies &&
      movies.results.map(({ id, title, release_date, poster_path }) => (
        <StyledCardContainer key={id}>
          <Link href="/movies/[id]" as={`/movies/${id}`}>
            <a>
              <Card
                title={title}
                releaseDate={release_date}
                posterLink={
                  poster_path === null
                    ? '/fine.jpg'
                    : `http://image.tmdb.org/t/p/w500${poster_path}`
                }
              />
            </a>
          </Link>
        </StyledCardContainer>
      ))}
  </StyledMovieContent>
);

MovieDisplay.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieDisplay;
