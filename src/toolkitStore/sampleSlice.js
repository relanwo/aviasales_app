import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, actoin) {},
    removeTodo(state, actoin) {},
    toggleTodoComplete(state, actoin) {}
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = sampleSlice.actions

export default sampleSlice.reducer