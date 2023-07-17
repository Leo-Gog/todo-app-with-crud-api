import { useContext, useEffect, useState } from "react"
import TaskItem from "./TaskItem"
import myContext from "../myContext"


const TasksList = () => {
  const [tasks, setTasks] = useState()
  const {refresh} = useContext(myContext)
  
  useEffect(() =>  {
    fetch('/api/v1/tasks', {
      headers:{
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(res => res.json())
    .then(data => setTasks(data.items))
  },[refresh])

  return (
    <ul  className='todolist'>
      {tasks?.map((task) => <TaskItem key={task._uuid} task={task} />)}
    </ul>
  )
}
export default TasksList