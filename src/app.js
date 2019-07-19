import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from './theme';

import App from './modules';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
