import {
	TOGGLE_FILTER,
	ON_CHECK,
	ON_CHECK_ALL,
	TICKETS_LOAD,
	LOADER_ON,
	LOADER_OFF,
	CHANGE_VISIBLE,
	ERROR_ON,
	ERROR_OFF,
} from './types';

export function toggleFilter() {
	return {
		type: TOGGLE_FILTER,
    // data
	};
}

export function onCheck(e) {
	return {
		type: ON_CHECK,
		e,
	};
}
export function onCheckAll(e) {
	return {
		type: ON_CHECK_ALL,
		e,
	};
}

export function loaderOn() {
	return {
		type: LOADER_ON,
	};
}
export function loaderOff() {
	return {
		type: LOADER_OFF,
	};
}

export function errorOn(text) {
	return {
		type: ERROR_ON,
		text,
	};
}
export function errorOff() {
	return {
		type: ERROR_OFF,
	};
}

// let searchId;

export const getSearchId = async () => {
	const responseId = await fetch(
		'https://aviasales-test-api.kata.academy/search'
	);
	// if (!responseId.success) throw new Error('Failed to get ID');
	const data = await responseId.json();
	// console.log('data >>>>>>>>>>>>>',data)
	// return data.searchId;
  const searchId = data['searchId']
  return searchId
};

export const ticketsLoad = () => {
	// console.log('getSearchId >>>>', getSearchId())
  // const searchId =  getSearchId();
	return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const searchId = await getSearchId();
			// console.log('res >', res)
			const response = await fetch(
				`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
			);
			console.log('resp >>', response);
			// if (!response.ok) throw new Error('Failed DATA');
			let data = await response.json();
			console.log('data >>', data);
			// while (data.stop === false) {
			// 	const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
			// 	console.log(await response.json())
			// }
			// if (data === undefined || !data.stop) {}
      // if (data.stop !== true) {
			// 	return dispatch(ticketsLoad())
			// }
			dispatch({
				type: TICKETS_LOAD,
				data,
			});
			dispatch(loaderOff());
		} catch (err) {
			dispatch(errorOn('Ошибка получения данных'));
			dispatch(loaderOff());
		}
	};
}

export function changeVisible() {
	return {
		type: CHANGE_VISIBLE,
	};
}
