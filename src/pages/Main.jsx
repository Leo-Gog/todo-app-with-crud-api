import { useState } from 'react'
import TasksForm from '../components/TaskForm'
import TasksList from '../components/TaskList'

const Main = () => {
  const [refresh, setRefresh] = useState()

  const catchChange = (change) => {
    setRefresh(change)
  }

  return (
    <>
        <TasksForm refresh={catchChange}/>
        <TasksList refresh={catchChange} def={refresh}/>
    </>
  )
}

export default Main