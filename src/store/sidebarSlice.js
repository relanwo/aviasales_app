import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    // checkedList: defaultValue,
    checkedList: 'Все',
    checkAll: true
  },
  reducers: {
    // addTodo(state, action) {},
    onChange(state, action, e) {
      console.log(state)
      console.log(action)
      // const list = e
      // setCheckedList(list);
      // setCheckAll(list.length === values.length);
    },
    onCheckAllChange(state, action, e) {
      console.log(state)
      console.log(action)
      // setCheckedList(e.target.checked ? values : []);
      // setCheckAll(e.target.checked);
      // console.log(checkAll)
    }
  },
});

export const { onChange, onCheckAllChange } = sidebarSlice.actions

export default sidebarSlice.reducer;