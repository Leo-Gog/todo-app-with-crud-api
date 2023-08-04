import { createSlice } from "@reduxjs/toolkit";
import { languageState } from "../../types/interfaces";

enum enTexts {
    _lang = "en",
    taskPlaceholder = "task",
    userPlaceholder = "user",
    edit = "Edit",
    removeTitle = "Remove",
}
enum kaTexts {
    _lang = "ka",
    taskPlaceholder = "საქმე",
    userPlaceholder = "შემსრულებელი",
    edit = "შეცვლა",
    removeTitle = "წაშლა",
}

const defaultLanguage = localStorage.getItem('language') ?? 'en'

const initialState: languageState = {
    texts: defaultLanguage === 'en'? enTexts : kaTexts
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage(state) {
            state.texts = (
                state.texts._lang === 'en' ? 
                kaTexts  : enTexts
            )
            localStorage.setItem('language', state.texts._lang)
        }
    },
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer

