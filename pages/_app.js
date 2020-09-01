/* eslint-disable react/prop-types */

/**
 * Global theming
 * https://styled-components.com/docs/advanced
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components';
import { theme, GlobalStyle } from '../styles';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        {/* <style jsx="true" global>
          {`
            @import url('<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">');
          `}
        </style> */}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
