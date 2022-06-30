import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import './App.css';
import { LIGHT_THEME, FontsVTBGroup } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import '@admiral-ds/fonts/VTBGroupUI.css';

ReactDom.render(
  <React.StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <FontsVTBGroup />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);
