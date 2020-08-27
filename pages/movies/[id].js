import Head from "next/head";
import { getMovie } from "../../lib/movies";

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

export default Movie;
