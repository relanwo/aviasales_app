import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { sidebarReducer } from "./sidebarReducer";
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
  filterReducer,
  sidebarReducer,
  ticketsReducer
})