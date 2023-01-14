import React from 'react';
import ReactDom from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

import App from './components/app/app';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
