// /* eslint-disable no-unused-vars */
// import React from 'react';
// import ReactDom from 'react-dom/client';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './redux/rootReducer';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// // import store from './redux/reducer'
// // import { reducer } from './redux/reducer';
// import { configureStore } from '@reduxjs/toolkit'

// import App from './components/app/app';

// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
// ))

// // const store = createStore(rootReducer, composeWithDevTools(
// //   applyMiddleware(thunk)
// //   // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
// // ))

// // const store = createStore(rootReducer, composeWithDevTools(
// //   applyMiddleware(thunk)
// //   // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
// // ))

// // const store = configureStore(
// //   { reducer: rootReducer },
// //   composeWithDevTools(applyMiddleware(thunk))
// // )

// const root = ReactDom.createRoot(document.getElementById('app'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   );





// import React from 'react';
// import ReactDom from 'react-dom/client';

// import App from './components/app/app';

// const container = document.getElementById('app');
// const root = ReactDom.createRoot(container);
// root.render(<App />);


import React from 'react';
import ReactDom from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
// import store from './store'
// eslint-disable-next-line no-unused-vars
import { configureStore } from "@reduxjs/toolkit";
// import sidebarSlice from "./store/sidebarSlice";
// import filterSlide from "./store/filterSlice";

import App from './components/app/app';

// const defaultState = {
//   cash: 6
// }
// // action = {type: '', payload: }

// // import reducer from './redux/reducer';
// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'CHOOSE_CHEAP':
// 			return {...state, cash: state.cash + action.payload};
// 		case 'CHOOSE_FAST':
// 			return {...state, cash: state.cash - action.payload};
//     case 'DEC':
//         return state - action.payload;
// 		default:
// 			return state;
// 	}
// }

// const store = createStore(reducer);

// ReactDOM.render(
//   // <Provider store={store}>
//     <App />,
//   // </Provider>,
//   document.getElementById('app')
// );
// const store = configureStore({
//   reducer: {
//     // sidebar: sidebarSlice,
//     // filter: filterSlide
//   },
// });
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
))

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  );