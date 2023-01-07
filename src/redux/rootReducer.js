import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer = combineReducers({
  filterReducer,
  sidebarReducer
})