import React from 'react'
import TasksForm from '../components/TaskForm'
import TasksList from '../components/TaskList'

const Main: React.FC = () => {
  return (
    <>
      <TasksForm />
      <TasksList />
    </>
  )
}

export default Main