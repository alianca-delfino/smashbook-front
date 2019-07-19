import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import property from 'lodash/property';

import theme from './theme.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${property('theme.mainFont')};
  }
`;

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      { children }
    </Fragment>
  </ThemeProvider>
);
