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

const initialState = {
    texts: texts['en']
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage(state) {
            state.texts = (
                state.texts._lang === 'en' ? 
                texts['ka']  : texts['en'] 
            )
        }
    },
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer

