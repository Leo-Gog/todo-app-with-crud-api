import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodos, modifyTodo } from "./todo.thunk";
const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.fulfilled.type]: (state, action) => {
        state.todoList = action.payload;
    },
    [deleteTodo.fulfilled.type]: (state, action) => {
        state.todoList = state.todoList.filter((todo) => todo._uuid !== action.payload)
    },
    [modifyTodo.fulfilled.type]: (state, action) => {
        state.todoList = state.todoList.map((todo)=> todo._uuid === action.payload._uuid ?  {...todo, ...action.payload} : todo)
    },
    [addTodo.fulfilled.type]: (state, action) => {
        state.todoList.unshift(action.payload)
    },
  },
});

export default todoSlice.reducer;
