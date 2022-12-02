import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'reset-css';
import "wired-elements";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Indie Flower';
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
