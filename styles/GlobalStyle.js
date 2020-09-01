import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px; 
    box-sizing: border-box;
    outline: none;
    border: 0px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${colors.white};
    background-color: ${colors.bg};
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 38px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;
    border:0px solid red; 
    display:inline-block; 
    line-height:0;
  }
`;

export default GlobalStyle;
