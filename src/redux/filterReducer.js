import { TOGGLE_FILTER } from './types';
// import { ticketsReducer } from './ticketsReducer';
// import { useSelector } from 'react-redux';

const initialState = {
	filterState: 'cheap',
  // filteredTickets
};
// const tickets = useSelector((state) => state.ticketsReducer.tickets);

// console.log('ticketsReducer >>>>>>', ticketsReducer)
export const filterReducer = (state = initialState, action) => {
	// console.log('filterReducer >', action)

	switch (action.type) {
		case TOGGLE_FILTER:
			return {
				...state,
				filterState: state.filterState === 'fast' ? 'cheap' : 'fast',
        // tickets:
			};
		default:
			return state;
	}
};
