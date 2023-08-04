import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const selectTodos = (state: RootState) => state.todo.todoList
const selectError = (state: RootState) => state.error.error
const selectLoading = (state: RootState) => state.loading.loading
const selectLanguage = (state: RootState) => state.language.texts
const selectTheme = (state: RootState) => state.theme.theme

export const getSelectedTodos = createSelector(
    selectTodos, (todos) => todos
)
export const getSelectedError = createSelector(
    selectError, (error) => error
)
export const getSelectedLoading = createSelector(
    selectLoading, (loading) => loading

)
export const getSelectedLanguage = createSelector(
    selectLanguage, (language) => language

)
export const getCurrentLang = createSelector(
    selectLanguage, (language) => language._lang

)
export const getSelectedTheme = createSelector(
    selectTheme, (theme) => theme

)