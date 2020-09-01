/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { Layout } from '../components';
import { theme, GlobalStyle } from '../styles';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
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
    </>
  );
};

export default App;
