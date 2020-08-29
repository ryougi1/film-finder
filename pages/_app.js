/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

/**
 * Global theming
 * https://styled-components.com/docs/advanced
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
