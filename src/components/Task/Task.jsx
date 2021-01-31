import React from 'react'
import './Task.css'
import {useDispatch} from 'react-redux'
import {ChangeIsDone} from '../../Redux/Actions'

export default function Task({item,index}) {

    const dispatch = useDispatch()
    
    return (
        <div className="Task">
            <h4><span className="Task_number">Task{index+1}:</span>{item.descreption}</h4>
            <div className="Taskdiv">
                <button className="done-btn" onClick={()=>dispatch(ChangeIsDone(item.id))}>{!item.isDone?"Done":"undo"}</button>
            </div>
            
        </div>
    )
}
