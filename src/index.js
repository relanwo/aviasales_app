import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import App from './components/App/App';
import { rootReducer } from './store/root-reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
