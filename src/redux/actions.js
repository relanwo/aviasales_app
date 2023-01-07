import { TOGGLE_FILTER, ON_CHECK, ON_CHECK_ALL } from './types';

export function toggleFilter() {
  return {
    type: TOGGLE_FILTER
  }
}

export function onCheck(e) {
  return {
    type: ON_CHECK,
    e
  }
}
export function onCheckAll(e) {
  return {
    type: ON_CHECK_ALL,
    e
  }
}