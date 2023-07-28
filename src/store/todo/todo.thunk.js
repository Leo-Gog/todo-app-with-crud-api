import { createAsyncThunk } from "@reduxjs/toolkit";

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
        console.error(err.message);
    }
};

export const getTodos = createAsyncThunk("/tasks/GET", async (_, ThunkAPI) => {
    try {
        const data = await sendRequest("/api/v1/tasks", 'GET')
        if (data) return ThunkAPI.fulfillWithValue(data.items);
    } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong");
    }
});

export const deleteTodo = createAsyncThunk("/tasks/DELETE", async (id, ThunkAPI) => {
    try {
        const data = await sendRequest(`/api/v1/tasks/${id}`, 'DELETE')
        if (data) return ThunkAPI.fulfillWithValue(data._uuid);
      } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong");
      }
})

export const modifyTodo = createAsyncThunk("/tasks/PUT",  async (payload, ThunkAPI) => {
    try {
        const data = await sendRequest(`/api/v1/tasks/${payload._uuid}`, 'PUT', payload)
        if (data) return ThunkAPI.fulfillWithValue(payload);
    } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong");
    }
})

export const addTodo = createAsyncThunk("/tasks/POST",  async (payload, ThunkAPI) => {
    try {
        const data = await sendRequest(`/api/v1/tasks`, 'POST', payload)
        console.log(data)
        if (data) return ThunkAPI.fulfillWithValue(data.items[0]);
    } catch (error) {
        return ThunkAPI.rejectWithValue("Something went wrong");
    }
})