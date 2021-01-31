import {ADD_TASK } from "../constatnt/index";
import { CHANGE_IS_DONE } from "../constatnt/index";


const initialstate={
     todos:[
        {
            id:Math.random(),
            descreption: "finish front end",
            isDone: false
        },
        {
            id:Math.random(),
            descreption: "finish BACK end",
            isDone: false
        },
        {
            id:Math.random(),
            descreption: "finish COSRE",
            isDone: false
        }
    ]
}


function rootReducer(state=initialstate,action){
    const{type,payload}= action;
    switch(type){
        case ADD_TASK:
            return{
        todos:state.todos.concat({id:Math.random,descreption:payload.toAddTask,isDone:false}),
            }
        case CHANGE_IS_DONE:
            return{
                todos:state.todos.map((item)=>
                item.id === payload? {...item,isDone :!item.isDone}: item
                ),
            };
        default:
        return state
    }
}
export default rootReducer;