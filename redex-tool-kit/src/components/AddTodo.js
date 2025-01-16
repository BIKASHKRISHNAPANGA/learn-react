import React ,{useState}from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {

const [imput, setInput]=useState('')
const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()

        dispatch (addTodo(imput))
        setInput('')
    }


  return (
    <>
   <form onSubmit={addTodoHandler}>
    <input type='text'></input>
   </form>
   </>
  )
}

export default AddTodo