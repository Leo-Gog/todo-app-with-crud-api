import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem('theme') ?? 'light'

interface themeState {
    theme: string
}

const initialState: themeState = {
    theme: defaultTheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
