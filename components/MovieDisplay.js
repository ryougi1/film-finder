import Link from "next/link";
import styled from "styled-components";
import { Card } from "../components";
import { mixins } from "../styles";

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

const MovieDisplay = ({ movies }) => {
  return (
    <StyledMovieContent>
      {movies &&
        movies.results.map(({ id, title, release_date, poster_path }) => {
          return (
            <StyledCardContainer key={id}>
              <Link href="/movies/[id]" as={`/movies/${id}`}>
                <a>
                  <Card
                    title={title}
                    releaseDate={release_date}
                    posterLink={"http://image.tmdb.org/t/p/w500" + poster_path}
                  ></Card>
                </a>
              </Link>
            </StyledCardContainer>
          );
        })}
    </StyledMovieContent>
  );
};

export default MovieDisplay;
