import React from 'react'
import { useState } from 'react'


const Formulaire = ({addTask,display}) => {
    const [task,setTask]=useState("");
    const [dayTime,setDayTime]=useState("");
    const [check,setCheck]=useState(false);
  
    const add= (e)=>{
        e.preventDefault()
        addTask({id:Math.floor(Math.random() * 100),
                 text:task,
                 day:dayTime,
                 reminder:check
        })
        setTask("");
        setDayTime("");
        setCheck(false);
    }

  return (
    <div>
        {display==="Close" &&
        <form className='add-form' onSubmit={add}>

            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={task} onChange={(e)=>setTask(e.target.value)} />
                
            </div>

            
            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder='Add Day and Time' value={dayTime} onChange={(e)=>setDayTime(e.target.value)} />
                
            </div>

            <div className='form-control form-control-check'>
                <label>Check</label>
                <input type="checkbox"   onClick={()=>setCheck(!check)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />

        </form>
        }

    </div>
  )
}

export default Formulaire
