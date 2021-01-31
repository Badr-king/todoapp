import React from 'react'
import Task from '../Task/Task'
import './ListTask.css'
import {useSelector} from 'react-redux'
export default function ListTask() {
    const todos = useSelector(state => state.todos)
    return (
        <div className="listTask">
           { todos.map((item,index) => <Task item={item} key={index} index={index}/> )}
        </div>
    )
}

