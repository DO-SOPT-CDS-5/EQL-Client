import React, { useState } from 'react';

import GlobalStyle from './styles/globalStyle';
import LayoutComponent from './components/common/LayoutComponent';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutComponent>
        <Router />
      </LayoutComponent>
    </ThemeProvider>
  );
}
export default App;
