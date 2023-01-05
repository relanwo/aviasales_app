// import React from 'react';
// import ReactDom from 'react-dom/client';

// import App from './components/app/app';

// const container = document.getElementById('app');
// const root = ReactDom.createRoot(container);
// root.render(<App />);


import React from 'react';
import ReactDom from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { createStore } from 'redux';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import store from './store'

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

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  );