import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodos, modifyTodo } from "./todo.thunk";
import { TaskInterface } from "../../types/interfaces";

export interface TodoState {
  todoList: TaskInterface[]
}

const initialState: TodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter((todo) => todo._uuid !== action.payload)
      })
      .addCase(modifyTodo.fulfilled, (state, action) => {
        state.todoList = state.todoList.map((todo) =>
          todo._uuid === action.payload._uuid ? {...todo, ...action.payload} : todo
        )
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.unshift(action.payload)
      })
  },
});

export default todoSlice.reducer;
