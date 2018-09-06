
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../index';
import theme from '../../theme';

const AppDecorator = ({ children }: { children: React.Node }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default AppDecorator;