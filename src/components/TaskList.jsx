import { useEffect } from "react"
import TaskItem from "./TaskItem"
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from "../store/todo/todo.thunk"
import { taskListReselector } from "../store/selectors"

const TasksList = () => {
  const dispatch = useDispatch()
  const [todoList, error, loading] = useSelector(taskListReselector)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <>
      {loading ? <p>loading...</p> : undefined}
      {error ? <p>loading...</p> : undefined}
      <ul  className='todolist'>
          {todoList?.map((task) => <TaskItem key={task._uuid} task={task} />)}
        </ul>
    </>
  )
}
export default TasksList