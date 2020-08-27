import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Card } from "../components";
import { mixins, theme, GlobalStyle } from "../styles";
import { getTrending, getMovie } from "../lib/movies";

const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexBetween}
  padding: 50px 12px;
`;

const StyledCardContainer = styled.div`
  max-width: 550px;
  width: 100%;
  font-size: 12px;
  text-align: center;
`;

export async function getServerSideProps() {
  const trendingMovies = await getTrending();
  return { props: { trendingMovies } };
}

const Home = ({ trendingMovies }) => {
  return (
    <main>
      <Head title="Film Finder" />
      <GlobalStyle />
      <h1>Film Finder</h1>
      <h2>Trending Films: </h2>
      <StyledContainer>
        {trendingMovies &&
          trendingMovies
            .slice(0, 5)
            .map(({ id, title, release_date, poster_path }) => {
              return (
                <StyledCardContainer key={id}>
                  <Link href="/movies/[id]" as={`/movies/${id}`}>
                    <a>
                      <Card
                        title={title}
                        releaseDate={release_date}
                        posterLink={
                          "http://image.tmdb.org/t/p/w500" + poster_path
                        }
                      ></Card>
                    </a>
                  </Link>
                </StyledCardContainer>
              );
            })}
      </StyledContainer>
    </main>
  );
};

export default Home;
