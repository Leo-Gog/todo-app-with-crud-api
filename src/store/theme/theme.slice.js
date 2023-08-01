import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem('theme') ?? 'light'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: defaultTheme
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
