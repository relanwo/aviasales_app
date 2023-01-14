// /* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars
// import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// // import reduxThunk from 'redux-thunk'

// import { ON_CHECK, ON_CHECK_ALL } from './types';
// import { TOGGLE_FILTER } from './types';
// import {
// 	TICKETS_LOAD,
// 	LOADER_ON,
// 	LOADER_OFF,
// 	CHANGE_VISIBLE,
// 	ERROR_ON,
// 	ERROR_OFF,
// } from './types';

// const initialState = {
// 	filterState: 'cheap',
// 	filteredTickets: [],

// 	checkedList: 'Все',
// 	checkAll: true,
// 	values: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],

// 	tickets: [],
// 	loader: false,
// 	visible: 5,
// 	error: null,
// };

// export function reducer(state = initialState, action) {
// 	switch (action.type) {
// 		case TOGGLE_FILTER:
// 			return {
// 				...state,
// 				filterState: state.filterState === 'fast' ? 'cheap' : 'fast',
// 				// filteredTickets: filter === 'cheap'
// 				//   ? data.sort(
// 				// 		(prev, next) => prev.price - next.price
// 				// 	)
// 				//   : data.sort(
// 				// 		(prev, next) =>
// 				// 			prev.segments[0].duration + prev.segments[1].duration -
// 				// 			(next.segments[0].duration + next.segments[1].duration)
// 				//   )
// 				// tickets:
// 			};

// 		case ON_CHECK:
// 			return {
// 				...state,
// 				checkedList: action.e,
// 				checkAll: action.e.length === initialState.values.length,
// 			};
// 		case ON_CHECK_ALL:
// 			return {
// 				...state,
// 				checkedList: action.e ? initialState.values : [],
// 				checkAll: action.e,
// 			};

// 		case TICKETS_LOAD:
// 			// const tickets = action.data.tickets
// 			return {
// 				...state,
// 				tickets: action.data.tickets,
// 				// tickets: [...state.tickets, action.data.tickets]
// 			};
// 		case LOADER_ON:
// 			return {
// 				...state,
// 				loader: true,
// 			};
// 		case LOADER_OFF:
// 			return {
// 				...state,
// 				loader: false,
// 			};
// 		case CHANGE_VISIBLE:
// 			return {
// 				...state,
// 				visible: state.visible + 5,
// 			};
// 		case ERROR_ON:
// 			return {
// 				...state,
// 				error: action.text,
// 			};
// 		case ERROR_OFF:
// 			return {
// 				...state,
// 				error: null,
// 			};
// 		default:
// 			return state;
// 	}
// }

// // const store = createStore(
// //   reducer,
// //   composeWithDevTools(
// //     applyMiddleware(thunk)
// //   )
// // )
// // const store = createStore({reducer}, compose(
// //   applyMiddleware(thunk),
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // ))

// // export default reducer;

// // const store = createStore(
// // 	{ reducer },
// // 	composeWithDevTools(applyMiddleware(thunk))
// // );

// // export default store;
