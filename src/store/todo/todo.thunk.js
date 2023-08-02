import { createAsyncThunk } from "@reduxjs/toolkit";
import { catchError } from "../error/error.slice";
import { toggleLoading } from "../loading/loading.slice";

const sendRequest = async (url, method, body) => {

    const options = {
        method,
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
    };

    if (body) options.body = JSON.stringify(body);

    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("error");
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error (err.message)
    }
};

export const getTodos = createAsyncThunk("/tasks/GET", async (_, {dispatch, fulfillWithValue}) => {
    try {
        dispatch(toggleLoading())
        const data = await sendRequest("/api/v1/tasks", 'GET')
        dispatch(toggleLoading())
        if (data) return fulfillWithValue(data.items);
        
    } catch (error) {
        dispatch(catchError(error))
    }
});

export const deleteTodo = createAsyncThunk("/tasks/DELETE", async (id, {dispatch, fulfillWithValue}) => {
    try {
        dispatch(toggleLoading())
        const data = await sendRequest(`/api/v1/tasks/${id}`, 'DELETE')
        dispatch(toggleLoading())
        if (data) return fulfillWithValue(data._uuid);
      } catch (error) {
        dispatch(catchError(error))
      }
})

export const modifyTodo = createAsyncThunk("/tasks/PUT",  async (payload, {dispatch, fulfillWithValue}) => {
    try {
        dispatch(toggleLoading())
        const data = await sendRequest(`/api/v1/tasks/${payload._uuid}`, 'PUT', payload)
        dispatch(toggleLoading())
        if (data) return fulfillWithValue(payload);
    } catch (error) {
        dispatch(catchError(error))
    }
})

export const addTodo = createAsyncThunk("/tasks/POST",  async (payload, {dispatch, fulfillWithValue}) => {
    try {
        dispatch(toggleLoading())
        const data = await sendRequest(`/api/v1/tasks`, 'POST', payload)
        dispatch(toggleLoading())
        if (data) return fulfillWithValue(data.items[0]);
    } catch (error) {
        dispatch(catchError(error))
    }
})