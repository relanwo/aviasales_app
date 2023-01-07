import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterState: "cheap"
  },
  reducers: {
    // changeFilterState(state, action) {
    //   console.log(state)
    //   console.log(action)

    //   // state.filterState === 'cheap' ? state.filterState === 'fast' : state.filterState === 'cheap'
    //   state.filterState = action.payload
    //   console.log(state.filterState)
    // }
  },
});

export const { changeFilterState } = filterSlice.actions

export default filterSlice.reducer;