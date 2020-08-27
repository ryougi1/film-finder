import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px; 
    outline: none;
    border: 0px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${colors.white};
    background-color: ${colors.bg};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

export default GlobalStyle;
