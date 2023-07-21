import { useState } from 'react'
import TasksForm from '../components/TaskForm'
import TasksList from '../components/TaskList'
import myContext from '../contexts/myContext'

const Main = () => {
  const [refresh, setRefresh] = useState()

  const catchChange = (change) => {
    setRefresh(change)
  }

  return (
    <myContext.Provider value={{refresh, catchChange}}>
        <TasksForm />
        <TasksList />
    </myContext.Provider>
  )
}

export default Main