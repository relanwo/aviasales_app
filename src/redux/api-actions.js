// import {
// 	ticketsLoad,
// 	loaderOn,
// 	loaderOff,
//   getSearchId,
// 	// eslint-disable-next-line no-unused-vars
// 	errorOn,
// } from './actions';

// export const fetchSearchId = async () => {
//   return async (dispatch) => {
// 		dispatch(loaderOn())
//     const responseId = await fetch(
//       'https://aviasales-test-api.kata.academy/search'
//     );
//     // if (!responseId.success) throw new Error('Failed to get ID');
//     const data = await responseId.json();
//     // console.log(data.searchId)
//     dispatch(getSearchId(data.searchId))
//     // dispatch(fetchGetTickets()
//     // return data.searchId;
// 	}
// };

// export function fetchTicketsLoad() {
// 	// console.log('getSearchId >>>>', getSearchId())
// 	return async (dispatch) => {
// 		try {
// 			dispatch(loaderOn());
// 			const searchId = await fetchSearchId();
// 			const response = await fetch(
// 				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
// 			);
// 			console.log('resp >>', response);
// 			let data = await response.json();
// 			// console.log('data >>', data);
// 			dispatch(ticketsLoad(data));
// 			dispatch(loaderOff());
// 			if (data.stop !== true) {
// 				return dispatch(fetchTicketsLoad());
// 			}
// 		} catch (err) {
// 			// dispatch(errorOn('Ошибка получения данных'));
// 			// dispatch(fetchTicketsLoad())
// 			dispatch(loaderOff());
// 		}
// 	};
// }
