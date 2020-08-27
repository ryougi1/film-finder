import Head from "next/head";
import styled from "styled-components";
import { Card } from "../components";
import { mixins, theme, GlobalStyle } from "../styles";
import { getTrending } from "../lib/movies";

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
          trendingMovies.slice(0, 5).map((movie, i) => {
            return (
              <StyledCardContainer key={i}>
                <Card
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterLink={
                    "http://image.tmdb.org/t/p/w500" + movie.poster_path
                  }
                ></Card>
              </StyledCardContainer>
            );
          })}
      </StyledContainer>
    </main>
  );
};

export default Home;
