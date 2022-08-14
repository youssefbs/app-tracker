import { useEffect, useState } from "react";
import Formulaire from "./components/Formulaire";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";

function App() {



  //Static version of data
  //Create fake data to get in
  /*
  const [tasks,setTasks]=useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ])

  */
  const [btn,setBtn]=useState("Add")
  
  const toggleBtn=()=>{
    if(btn ==="Add"){
      
      setBtn("Close")
    }else{
      
      setBtn("Add")
    }
  }
  
  //Add Task
  const addTaskStatic=(task)=>{
      setTasks([...tasks,task])
  }

  //Delete Task
  const deleteTaskStatic=(id)=>{
    setTasks(tasks.filter(t=>{
      return t.id!=id
    }))
  }

  //Toggle Task
  const toggleTaskStatic=(id)=>{
    setTasks(tasks.map((t)=>{
      if(t.id==id){
        t.reminder=!t.reminder;
      }
      return t
    }))
  }


  //Create data using fake server 'json server"
  const [tasks,setTasks]=useState([])
  
  //fetch data form the server
  const fetchTask =async (id)=>{
    const res= await fetch(`http://localhost:5000/tasks/${id}`)
    const data= await res.json()
    return data
  }



  //Get All data
  useEffect(()=>{
    const getTasks=async ()=>{
      const tasksFromServer=await fetchTask("");
      //Il faut que j'attend jusqu'a la fonction termine son travail
      setTasks(tasksFromServer);
    }
    getTasks();
  },[])
  

  //delete data from the server
  const deleteTask= async(id)=>{
    //From the server
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    //From the UI
    setTasks(tasks.filter(t=>{
      return t.id!=id
    }))
  }


  //Add data form the server 
  
  const addTask= async(task)=>{
    //The data that is return form the server is the new object
    const res=await fetch(`http://localhost:5000/tasks`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
    const data=await res.json();


    setTasks([...tasks,data])
}

  
  //Toggle Task from the server (updat values)
  const toggleTask= async(id)=>{
    //Get the specific value form the server
    const olddata=await fetchTask(id)
    const updata={...olddata,reminder:!olddata.reminder}
    
    console.log(updata)

    const res=await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'        
      },
      body:JSON.stringify(updata)
    })
    
    const data=await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <div className="container">

      <Header btn={btn} toggleBtn={toggleBtn}/>  
      <Formulaire addTask={addTask} display={btn}/>
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />

    </div>
  );
}

export default App;
