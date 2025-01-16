import {createSlice , nanoid} from "@reduxjs/toolkit"

const initaialState={ 
    todos:[],
}
 export const todoSlice= createSlice({
    name:"todo",
    initaialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos=state.todo.filter((todo)=>
            todo.id !== action.payload)
        }
    }
 })

 export const {addTodo, removeTodo} = todoSlice.actions
  export default todoSlice.reducer