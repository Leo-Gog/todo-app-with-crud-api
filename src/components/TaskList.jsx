import { useEffect, useState } from "react"
import TaskItem from "./TaskItem"

const TasksList = ({refresh, def}) => {
  const [tasks, setTasks] = useState()
  useEffect(() => {
    fetch('/api/v1/tasks', {
      headers:{
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(res => res.json())
    .then(data => setTasks(data.items))
  },[def])

  return (
    <ul  className='todolist'>
      {tasks?.map((task) => <TaskItem key={task._uuid} task={task} refresh={refresh}/>)}
    </ul>
  )
}
export default TasksList