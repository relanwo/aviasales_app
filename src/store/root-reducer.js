import { combineReducers } from 'redux';

import { filterReducer } from './filter-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { ticketsReducer } from './tickets-reducer';

export const rootReducer = combineReducers({
  filterReducer,
  sidebarReducer,
  ticketsReducer,
});
