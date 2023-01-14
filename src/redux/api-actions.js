/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
import {
  ticketsLoad,
  loaderOn,
  loaderOff,
  getSearchId,
  // eslint-disable-next-line no-unused-vars
  errorOn,
} from './actions';

const data = [];
export const fetchTicketsLoad = () => async (dispatch) => {
  const searchId = await getSearchId();
  try {
    dispatch(loaderOn());
    let response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (!response.ok) {
      throw new Error();
    }
    let { tickets, stop } = await response.json();
    data.push(...tickets);
    dispatch(ticketsLoad(data));
    if (stop !== true) {
      while (stop !== true) {
        response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        if (!response.ok) {
          throw new Error();
        }
        ({ tickets, stop } = await response.json());
        if (stop === true) {
          break;
        } else {
          // console.log('STOP>>>>>', stop);
          data.push(...tickets);
          dispatch(ticketsLoad(data));
        }
      }
    }
    return data;
  } catch (err) {
    // dispatch(errorOn('Ошибка получения данных')); - закомментировала, потому что 500 ошибка частенько выскакивает
    dispatch(loaderOff());
  }
};
