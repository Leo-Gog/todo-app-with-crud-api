import { useEffect } from "react"
import TaskItem from "./TaskItem"
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from "../store/todo/todo.thunk"


const TasksList = () => {
  const dispatch = useDispatch()
  const {todoList, loading, error} = useSelector(state => state.todo)
  
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <ul  className='todolist'>
      {todoList?.map((task) => <TaskItem key={task._uuid} task={task} />)}
    </ul>
  )
}
export default TasksList