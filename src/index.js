import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, /* compose, applyMiddleware */ } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import './index.css';
import App from './App';

// TODO: Add devtools extension

const store = createStore(
  allReducers
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);