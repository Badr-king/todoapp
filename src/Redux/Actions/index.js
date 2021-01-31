import {ADD_TASK} from '../constatnt/index'
import {CHANGE_IS_DONE} from '../constatnt/index'
export const addTask= (payload)=>{
    return{
    type: ADD_TASK,
    payload: payload,


    }
}
export const  ChangeIsDone= (payload)=>{
    return{
    type: CHANGE_IS_DONE,
    payload: payload,


    }
}

