import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo.slice";
import languageReducer from "./language/language.slice"
import themeReducer from "./theme/theme.slice"
import errorReducer from "./error/error.slice"
import loadingRedcer from "./loading/loading.slice"

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  language: languageReducer,
  error: errorReducer,
  loading: loadingRedcer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch