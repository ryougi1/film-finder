import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { getMovie } from '../../lib/movies';

export async function getServerSideProps({ params }) {
  const movieDetails = await getMovie(params.id);
  return { props: { movieDetails } };
}

const Movie = ({ movieDetails }) => {
  return (
    <>
      <Head>
        <title>{movieDetails.title}</title>
      </Head>
      <div>{movieDetails.title}</div>
    </>
  );
};

Movie.propTypes = {
  movieDetails: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Movie;
