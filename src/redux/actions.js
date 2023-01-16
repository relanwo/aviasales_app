import {
  TOGGLE_FILTER,
  ON_CHECK,
  ON_CHECK_ALL,
  GET_SEARCH_ID,
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

export function ticketsLoad(data) {
  return {
    type: TICKETS_LOAD,
    data,
  };
}

export function getSearchId(id) {
  return {
    type: GET_SEARCH_ID,
    payload: id,
  };
}

export function changeVisible() {
  return {
    type: CHANGE_VISIBLE,
  };
}
