import { createSlice } from "@reduxjs/toolkit";

interface loadingState {
    loading: boolean
}

const initialState: loadingState = {
    loading: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        toggleLoading(state){
            state.loading === true ? state.loading = false : state.loading = true
        }
    }
})

export const { toggleLoading } = loadingSlice.actions
export default loadingSlice.reducer