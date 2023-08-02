import { createSelector } from "@reduxjs/toolkit";

const taskListSelector = state => [
    state.todo.todoList,
    state.error.error,
    state.loading.loading
  ];

export const  taskListReselector = createSelector(
    taskListSelector, (taskListSelector) => taskListSelector
)

const taskItemtSelector = (state) => [
    state.language.texts,
    state.theme.theme
];

export const  taskItemtReselector = createSelector(
    taskItemtSelector, (taskItemtSelector) => taskItemtSelector
)

const taskFormSelector = state => state.language

export const taskFormReselector = createSelector(
    taskFormSelector, (taskFormSelector) => taskFormSelector
) 

const headerSelector = (state) => [
    state.language.texts._lang,
    state.theme.theme
  ]

export const headerReselector = createSelector(
    headerSelector, (headerSelector) => headerSelector
) 

// export const modifyTaskSelector = createSelector()