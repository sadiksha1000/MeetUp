import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {FavoritesContextProvider} from './store/favorites-context';

// BrowserRouter= Keeps our UI in sync with the URL.
ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);

