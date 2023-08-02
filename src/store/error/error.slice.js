import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        catchError(state, action){
            state.error = action.payload;
        }
    }
})

export const { catchError } = errorSlice.actions
export default errorSlice.reducer