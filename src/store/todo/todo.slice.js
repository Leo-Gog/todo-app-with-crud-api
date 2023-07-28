import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodos, modifyTodo } from "./todo.thunk";
const initialState = {
  todoList: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.pending.type]: (state) => {
        state.loading = true;
    },
    [getTodos.fulfilled.type]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = action.payload;
    },
    [getTodos.rejected.type]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [deleteTodo.pending.type]: (state) => {
        state.loading = true;
    },
    [deleteTodo.fulfilled.type]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = state.todoList.filter((todo) => todo._uuid !== action.payload)
    },
    [deleteTodo.rejected.type]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [modifyTodo.pending.type]: (state) => {
        state.loading = true;
    },
    [modifyTodo.fulfilled.type]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList = state.todoList.map((todo)=> todo._uuid === action.payload._uuid ?  {...todo, ...action.payload} : todo)
    },
    [modifyTodo.rejected.type]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [addTodo.pending.type]: (state) => {
        state.loading = true;
    },
    [addTodo.fulfilled.type]: (state, action) => {
        state.loading = false;
        state.error = null;
        state.todoList.unshift(action.payload)
    },
    [addTodo.rejected.type]: (state) => {
        state.loading = true;
    },
  },
});

export const { removeTodo } = todoSlice.actions

export default todoSlice.reducer;
