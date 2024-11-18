import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter,setCount]=useState(10);
  //let Counter=10;
  const addValue=()=>{
    setCount(counter+1)
    console.log(counter);
  }
  const decValue=()=>{
    setCount(counter-1)
    console.log(counter);
  }
  return (
    <>
      <h1> react couse by bikash {counter}</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}> add valuse</button>
      <button onClick={decValue}> remove value</button>
      <p>footter :{counter}</p>
    </>
  )
}

export default App
