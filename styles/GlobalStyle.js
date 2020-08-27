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
`;

export default GlobalStyle;
