/* eslint-disable no-unused-vars */
import {
	ticketsLoad,
	loaderOn,
	loaderOff,
	getSearchId,
	// eslint-disable-next-line no-unused-vars
	errorOn,
} from './actions';
// import {TICKETS_LOAD} from './types';

// export const fetchSearchId = () => {
//   return async (dispatch) => {
//     const responseId = await fetch(
//       'https://aviasales-test-api.kata.academy/search'
//     );
//     // if (!responseId.success) throw new Error('Failed to get ID');
//     const data = await responseId.json();
//     // console.log('data >>>>>>>>>>>>>',data)
//     // return data.searchId;
//     const searchId = data['searchId']
//     dispatch(getSearchId(searchId))
//     fetchTicketsLoad(searchId)
//   }
// };
// console.log((store) => console.log('store', store))

let data = [];
export const fetchTicketsLoad = (searchId) => {
	console.log('store', searchId);
	return async (dispatch) => {
		// console.log('dat', data)
		const searchId = await getSearchId();
		try {
			dispatch(loaderOn());
			const response = await fetch(
				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
			);
			if (!response.ok) {
				throw new Error();
			}

			const { tickets, stop } = await response.json();
			console.log('STOP>>>>>', stop);
			data.push(...tickets);
			// console.log('data>>>>>', data)
			dispatch(ticketsLoad(data));
			if (stop !== true) {
				while (stop !== true) {
					const response = await fetch(
						`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
					);
					if (!response.ok) {
						throw new Error();
					}
					let { tickets, stop } = await response.json();
					if (stop === true) {
						break;
					} else {
						console.log('STOP>>>>>', stop);
						data.push(...tickets);
						dispatch(ticketsLoad(data));
					}
				}
			}
			return data;
		} catch (err) {
			// dispatch(errorOn('Ошибка получения данных'));
			dispatch(loaderOff());
		}
		console.log('data щгеышву>>>>>', data);

		// const data = []
		// try {
		// 	dispatch(loaderOn());
		// 	const searchId = await getSearchId();
		// 	const response = await fetch(
		// 		`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
		// 	);
		// 	if (!response.ok) {
		// 		throw new Error();
		// 	}
		// 	const pack = await response.json();
		// 	console.log('data>>>>', data);
		//   data.push(pack.tickets)
		// 	// dispatch(ticketsLoad(data.tickets));
		// 	dispatch(loaderOff());
		// 	if (!pack.stop) {
		// 		return dispatch(fetchTicketsLoad());
		// 	}
		// } catch {
		// 	dispatch(fetchTicketsLoad());
		// 	dispatch(loaderOff());
		// }
		// // return data;
		// dispatch(ticketsLoad(data));
	};
};

// export const fetchTicketsLoad = () => {
// 	return async (dispatch) => {
// 		try {
//       dispatch(loaderOn())
//     const searchId = await getSearchId();
// 			const response = await fetch(
// 				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
// 			);
// 			if (!response.ok) {
// 				throw new Error();
// 			}
// 			const data = await response.json();
// 			dispatch(ticketsLoad(data));
// 			dispatch(loaderOff());
// 			// eslint-disable-next-line eqeqeq
// 			if (data.stop != true) {
// 				return dispatch(fetchTicketsLoad());
// 			}
// 		} catch {
// 			dispatch(fetchTicketsLoad());
// 		}
// 	};
// };

// export const fetchSearchId = async () => {
// return async (dispatch) => {
// 	dispatch(loaderOn())
//   const responseId = await fetch(
//     'https://aviasales-test-api.kata.academy/search'
//   );
//   // if (!responseId.success) throw new Error('Failed to get ID');
//   const data = await responseId.json();
//   // console.log(data.searchId)
//   // dispatch(getSearchId(data.searchId))
//   // dispatch(fetchTicketsLoad()
//   // return data.searchId;
//   const searchId = data['searchId']
//   return fetchTicketsLoad(searchId)
// }
// };

// export const ticketsLoad = () => {
// 	// console.log('getSearchId >>>>', getSearchId())
//   // const searchId =  getSearchId();
// 	return async (dispatch) => {
//     const data = [];
//     try {
//       dispatch(loaderOn());
//       const searchId = await getSearchId();
// 			// console.log('res >', res)
// 			const response = await fetch(
// 				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
// 			);
// 			// console.log('resp >>', response);
//       const { tickets, stop } = await response.json();
//       data.push(...tickets);
//       if (!stop) {
//         data.push(...(await ticketsLoad(searchId)));
//       }
// 			// if (!response.ok) throw new Error('Failed DATA');
// 			// let data = await response.json();
// 			// console.log('data >>', data);
// 			// while (data.stop === false) {
// 			// 	const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
// 			// 	console.log(await response.json())
// 			// }
// 			// if (data === undefined || !data.stop) {}
//       // if (data.stop !== true) {
// 			// 	return dispatch(ticketsLoad())
// 			// }
// 			dispatch({
// 				type: TICKETS_LOAD,
// 				data
// 			});
// 			dispatch(loaderOff());
// 		} catch (err) {
// 			dispatch(errorOn('Ошибка получения данных'));
// 			dispatch(loaderOff());
// 		}
// 	};

// export function fetchTicketsLoad() {
// 	// console.log('getSearchId >>>>', getSearchId())
// 	return async (dispatch) => {
// 		try {
// 			dispatch(loaderOn());
// 			const searchId = await getSearchId();
// 			// const searchId = await fetchSearchId();
// 			const response = await fetch(
// 				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
// 			);
// 			console.log('resp >>', response);
// 			let data = await response.json();
// 			// console.log('data >>', data);
// 			dispatch({
// 				type: TICKETS_LOAD,
// 				data,
// 			});
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
