/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

import App from './components/app/app';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // composeWithDevTools(applyMiddleware(thunk)),
);

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
