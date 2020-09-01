/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Heading, Date } from '../../components';
import { mixins } from '../../styles';
import { getMovieById } from '../../lib';

export async function getServerSideProps({ params }) {
  const movieDetails = await getMovieById(params.id);
  return { props: { movieDetails } };
}

const StyledContainer = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1200px;
  ${mixins.flexCenter}
`;

const StyledContent = styled.div`
  ${mixins.flexBetween}
  align-items: flex-start;
  max-height: 50%;
  width: 80%;
`;

const StyledImage = styled.img`
  position: relative;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
`;

const StyledDetails = styled.div`
  width: 60%;
  max-width: 480px;
  a {
    ${mixins.link};
  }
`;

const StyledSubHeading = styled.h3`
  margin: 3px 0px 3px 0px;
`;

const Movie = ({ movieDetails }) => {
  const { title, runtime, genres, overview } = movieDetails;
  const posterLink =
    movieDetails.poster_path === null
      ? '/travolta.png'
      : `http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const releaseDate = movieDetails.release_date;
  const stars = movieDetails.credits.cast.slice(0, 3);

  const getRuntime = () => {
    const hrs = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hrs}h ${mins}min`;
  };

  const getGenres = () => {
    return genres.map((g) => `${g.name}`).join(' ');
  };

  return (
    <StyledContainer>
      <Head>
        <title>{title}</title>
      </Head>

      <StyledContent>
        <StyledDetails>
          <Heading value={title} />
          <StyledSubHeading>
            {`Release date: `}
            <Date dateString={releaseDate} context="description" />
          </StyledSubHeading>
          <StyledSubHeading>{`Runtime: ${getRuntime()}`}</StyledSubHeading>
          <StyledSubHeading>{`Genres: ${getGenres()}`}</StyledSubHeading>
          <StyledSubHeading>Overview:</StyledSubHeading>
          <p>{overview}</p>
          <StyledSubHeading>Starring: </StyledSubHeading>
          <p>
            {stars &&
              stars.map((s) => (
                <Link href="/people/[id]" as={`/people/${s.id}`}>
                  <a>{`${s.name}, `}</a>
                </Link>
              ))}
          </p>
        </StyledDetails>
        <StyledImage src={posterLink} />
      </StyledContent>
    </StyledContainer>
  );
};

Movie.propTypes = {
  movieDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Movie;
