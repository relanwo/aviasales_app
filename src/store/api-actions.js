import {
  getSearchId, loaderOff, loaderOn, ticketsLoad,
} from './actions';

const data = [];
let searchId;

// eslint-disable-next-line consistent-return
export const fetchTicketsLoad = () => async (dispatch) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (!response.ok) {
      throw new Error();
    }
    const { tickets, stop } = await response.json();
    data.push(...tickets);
    dispatch(ticketsLoad(data));
    dispatch(loaderOff());
    if (stop !== true) {
      return dispatch(fetchTicketsLoad());
    }
  } catch {
    dispatch(fetchTicketsLoad());
  }
};

export const fetchSearchId = () => async (dispatch) => {
  dispatch(loaderOn());
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((response) => response.json())
    .then((json) => {
      dispatch(getSearchId(json.searchId));
      searchId = json.searchId;
      return json.searchId;
    })
    .then(() => dispatch(fetchTicketsLoad()));
};
