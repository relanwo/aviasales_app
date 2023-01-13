import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { sidebarReducer } from "./sidebarReducer";
import { ticketsReducer } from './ticketsReducer'

// import { TOGGLE_FILTER } from './types';

// import { TICKETS_LOAD, LOADER_ON, LOADER_OFF, CHANGE_VISIBLE, ERROR_ON, ERROR_OFF } from './types'

// import { ON_CHECK, ON_CHECK_ALL } from './types'
// // import { ticketsReducer } from './ticketsReducer';
// // import { useSelector } from 'react-redux';

// const initialState = {
// 	filterState: 'cheap',
//   tickets: [],
//   loader: false,
//   visible: 5,
//   error: null,
//   checkedList: 'Все',
//   checkAll: true,
//   values: [
//     'Без пересадок',
//     '1 пересадка',
//     '2 пересадки',
//     '3 пересадки',
//   ]
// };
// // const tickets = useSelector((state) => state.ticketsReducer.tickets);

// // console.log('ticketsReducer >>>>>>', ticketsReducer)
// export const filterReducer = (state = initialState, action) => {
// 	// console.log('filterReducer >', action)

// 	switch (action.type) {
// 		case TOGGLE_FILTER:
// 			return {
// 				...state,
// 				filterState: state.filterState === 'fast' ? 'cheap' : 'fast',
//         tickets: state.tickets.slice(0,1)
//         // tickets:
// 			};
// 		default:
// 			return state;
// 	}
// };

// // const initialState = {
// //   tickets: [],
// //   loader: false,
// //   visible: 5,
// //   error: null
// // }

// export const ticketsReducer = (state = initialState, action) => {
//   console.log('ticketsReducer >', action)
  
//   switch(action.type) {
//     case TICKETS_LOAD:
//       // const tickets = action.data.tickets
//       return {
//         ...state,
//         tickets: action.data.tickets
//         // tickets: [...state.tickets, action.data.tickets]
//       }
//     case LOADER_ON:
//       return {
//         ...state,
//         loader: true
//       }
//     case LOADER_OFF:
//       return {
//         ...state,
//         loader: false
//       }
//     case CHANGE_VISIBLE:
//       return {
//         ...state,
//         visible: state.visible + 5 
//       }
//     case ERROR_ON:
//       return {
//         ...state,
//         error: action.text
//       }
//     case ERROR_OFF:
//       return {
//         ...state,
//         error: null
//       }
//     default:
//       return state
//   }
// }

// // const initialState = {
// //   checkedList: 'Все',
// //   checkAll: true,
// //   values: [
// //     'Без пересадок',
// //     '1 пересадка',
// //     '2 пересадки',
// //     '3 пересадки',
// //   ]
// // }

// export const sidebarReducer = (state = initialState, action) => {
//   // console.log('sidebarReducer >', action.e)
  
//   switch(action.type) {
//     case ON_CHECK:
//       return {
//         ...state,
//         checkedList: action.e,
//         checkAll: action.e.length === initialState.values.length
//       }
//     case ON_CHECK_ALL:
//       return {
//         ...state,
//         checkedList: action.e ? initialState.values : [],
//         checkAll: action.e
//       }
//     default:
//       return state
//   }
// }

export const rootReducer = combineReducers({
  filterReducer,
  sidebarReducer,
  ticketsReducer
})

