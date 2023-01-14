import React from 'react';
import ReactDom from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

import App from './components/app/app';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
