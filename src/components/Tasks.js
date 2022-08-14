import React from 'react'
import Task from './Task'

const Tasks = ({tasks,deleteTask,toggleTask}) => {
  return (
    <div>
      {tasks.map((task)=>{
        return (
            <Task task={task} key={task.id} deleteTask={deleteTask} toggleTask={toggleTask}/>
        )
      })}
      {tasks.length == 0 && <p>No task to show</p>}
    </div>
  )
}

export default Tasks
