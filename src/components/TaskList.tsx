import React, { useEffect } from "react"
import TaskItem from "./TaskItem"
import { getTodos } from "../store/todo/todo.thunk"
import { getSelectedError, getSelectedLoading, getSelectedTodos } from "../store/selectors"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"

const TasksList: React.FC = () => {
  const dispatch = useAppDispatch()

  const todos = useAppSelector(getSelectedTodos)
  const error = useAppSelector(getSelectedError)
  const loading = useAppSelector(getSelectedLoading)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <>
      {loading ? <p>Loading...</p> : undefined}
      {error ? <p>Error!!! try again.</p> : undefined}
      <ul  className='todolist'>
          {todos.map((task) => <TaskItem key={task._uuid} task={task} />)}
        </ul>
    </>
  )
}
export default TasksList