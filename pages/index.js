import Head from "next/head";
import styled from "styled-components";
import { mixins, theme, GlobalStyle } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  height: 100vh;
  color: ${colors.white};
`;

const Home = () => {
  return (
    <main>
      <Head title="Film Finder" />
      <GlobalStyle />
      <StyledContainer>
        <h1>Film Finder</h1>
      </StyledContainer>
    </main>
  );
};

export default Home;
