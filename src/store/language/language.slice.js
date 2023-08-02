import { createSlice } from "@reduxjs/toolkit";

const texts = {
    en: {
        _lang: "en",
        taskPlaceholder: "task",
        userPlaceholder: "user",
        edit: "Edit",
        removeTitle: "Remove",
    },
    ka: {
        _lang: "ka",
        taskPlaceholder: "საქმე",
        userPlaceholder: "შემსრულებელი",
        edit: "შეცვლა",
        removeTitle: "წაშლა",
    },
};

const defaultLanguage = localStorage.getItem('language') ?? 'en'

const languageSlice = createSlice({
    name: "language",
    initialState:{
        texts: texts[defaultLanguage]
    },
    reducers: {
        toggleLanguage(state) {
            state.texts = (
                state.texts._lang === 'en' ? 
                texts['ka']  : texts['en'] 
            )
            localStorage.setItem('language', state.texts._lang)
        }
    },
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer

