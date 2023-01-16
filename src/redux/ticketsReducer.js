/* eslint-disable no-console */
import {
  TICKETS_LOAD, LOADER_ON, LOADER_OFF, CHANGE_VISIBLE, ERROR_ON, ERROR_OFF,
} from './types';

const initialState = {
  tickets: [],
  loader: false,
  visible: 5,
  error: null,
};

export const ticketsReducer = (state = initialState, action) => {
  // console.log('ticketsReducer >', action);
  // console.log('state >>>>>>', state);

  switch (action.type) {
    case TICKETS_LOAD:
      return {
        ...state,
        tickets: action.data,
      };
    case LOADER_ON:
      return {
        ...state,
        loader: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loader: false,
      };
    case CHANGE_VISIBLE:
      return {
        ...state,
        visible:
          state.visible <= state.tickets.length
            ? state.visible + 5
            : state.visible + (state.tickets.length + state.visible),
      };
    case ERROR_ON:
      return {
        ...state,
        error: action.text,
      };
    case ERROR_OFF:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
