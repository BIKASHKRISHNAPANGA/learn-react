import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm,TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo} , ...prev])
  }
/*to give unique id to each it bring date and time of exact moment
 spred (if we spred the object then only it will change ), */
const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo )))
}
/**in update function it prev which coll back contain previous all todos use s map used for loop by taking each todo named prevTodo ecah prevTodo have id if if watch with given todo id it will update or it will reamin same as prevTodo**/


const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}
/*filter use to creat new array in the verable of same array which mathes  the condtions , the id which dont match it removes*/

const toggleComplete = (id) => {
  setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )
  )
}
/** in toggleComplete it check each id like before if id mathes spred (if we spred the object then only it will change )prevTodo and changes ture to false or false to true if not it reains as it is*/

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])
/** useEffect work function side by side ,in this it fetch deta from local storage convert to json ,checks it has valuse and fetches data */



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
