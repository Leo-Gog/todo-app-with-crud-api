import { useContext, useEffect, useState } from "react"
import TaskItem from "./TaskItem"
import myContext from "../myContext"
import useCRUD from "../hooks/useCRUD"


const TasksList = () => {
  const [tasks, setTasks] = useState()
  const {refresh} = useContext(myContext)
  const { sendRequest } = useCRUD()
  
  useEffect(() =>  {
    sendRequest('/api/v1/tasks', 'GET')
      .then(data => setTasks(data.items))
  },[refresh, sendRequest])

  return (
    <ul  className='todolist'>
      {tasks?.map((task) => <TaskItem key={task._uuid} task={task} />)}
    </ul>
  )
}
export default TasksList