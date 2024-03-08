import React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskFormCustom from '../components/TaskFormCustom'

const Tasks = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom/>
      <TaskList/>
    </div>
  )
}

export default Tasks