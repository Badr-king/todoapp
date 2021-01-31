import './Addtask.css'
import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../../Redux/Actions/index'
 function AddTask () {


    const [toaddtask,setToaddtask]=useState("");

     const hand = (e)=>{
         setToaddtask(e.target.value)
     }
     const dispatch = useDispatch()


     const handlsub =()=>{
         if(toaddtask){
            dispatch(addTask({toaddtask:toaddtask}))
            setToaddtask('')
         }
        else{
            alert("Empty Task")
        }
     }
        return (
            <div className="Addtask">
            <h1>Todo App</h1>
            <span>
                <input type="text" placeholder="AddTask" onChange={hand} value={toaddtask} />
                <button onClick={handlsub} >ADD</button>
            </span>
            
            
        </div>
        )
    }
    export default AddTask;



