import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import sampleReducer from './sampleSlice'
import sidebarSlice from "./sidebarSlice";

export default configureStore({
  reducer: {
    // sample: sampleReducer,
    sidebar: sidebarSlice
  },
});