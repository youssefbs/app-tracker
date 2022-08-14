import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Task = ({task,deleteTask,toggleTask}) => {
    const del =()=>{
        deleteTask(task.id);
    }

    const toggle =()=>{
        toggleTask(task.id)
    }
    return (
    
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={toggle} 
    >
      <h3   
>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={del}
         
        />
      </h3>
      <p>{task.day}</p>
    </div>  
    
  )
}

export default Task
