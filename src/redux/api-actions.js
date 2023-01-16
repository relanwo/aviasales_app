/* eslint-disable import/named */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
import {
  getSearchId,
  // searchId,
  searchIdd,
  ticketsLoad,
  loaderOn,
  loaderOff,
  // eslint-disable-next-line no-unused-vars
  errorOn,
} from './actions';

const data = [];
let stopsCounter = 0;
const searchIdArray = [];

export const fetchTicketsLoad = () => async (dispatch) => {
  searchIdArray.push(await getSearchId());
  try {
    dispatch(loaderOn());
    let response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchIdArray[0]}`);
    console.log('response >', response);
    let { tickets, stop } = await response.json();
    data.push(...tickets);
    dispatch(ticketsLoad(data));
    dispatch(loaderOff());
    while (stop !== true) {
      stopsCounter++;
      console.log('stopsCounter >>', stopsCounter);
      response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchIdArray[0]}`);
      console.log('response >', response);
      ({ tickets, stop } = await response.json());
      console.log('STOP>>>>>', stop);
      if (stop === true) {
        break;
      } else {
        data.push(...tickets);
        dispatch(ticketsLoad(data));
      }
    }
    return data;
  } catch (err) {
    stopsCounter++;
    // eslint-disable-next-line no-restricted-globals
    if (!stop && stopsCounter >= 20) {
      dispatch(errorOn('Ошибка получения данных'));
    }
    dispatch(fetchTicketsLoad());
  }
};

// export const getSearchId = async () => {
//   const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
//   const response = await responseId.json();
//   const { id } = response;
//   console.log(id);
//   return id;
// };
// const searchId = getSearchId();
// // console.log(getSearchId());
// console.log(searchId);
// export const fetchTicketsLoad = (searchId) => async (dispatch) => {
//   // const searchId = await getSearchId();
//   try {
//     const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
//     if (!response.ok) {
//       throw new Error();
//     }
//     // const json = await response.json()
//     const { tickets, stop } = await response.json();
//     data.push(...tickets);
//     dispatch(ticketsLoad(data));
//     dispatch(loaderOff());
//     if (stop !== true) {
//       return dispatch(fetchTicketsLoad());
//     }
//   } catch {
//     dispatch(fetchTicketsLoad());
//   }
// };

// export const fetchSearchId = async () => (dispatch) => {
//   dispatch(loaderOn());
//   fetch('https://aviasales-test-api.kata.academy/search')
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch(getSearchId(json));
//       return json;
//     })
//     .then((json) => {
//       const { searchId } = json;
//       return searchId;
//     })
//     .then(async (searchId) => await dispatch(fetchTicketsLoad(searchId)));
// };
// const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
// const data = await responseId.json();
// const { searchId } = data;
// return searchId;
