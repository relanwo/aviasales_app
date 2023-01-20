import { ON_CHECK, ON_CHECK_ALL } from './types';

const initialState = {
  checkedList: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  checkAll: true,
  values: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHECK:
      return {
        ...state,
        checkedList: action.e,
        checkAll: action.e.length === initialState.values.length,
      };
    case ON_CHECK_ALL:
      return {
        ...state,
        checkedList: action.e ? initialState.values : [],
        checkAll: action.e,
      };
    default:
      return state;
  }
};
