import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('olive')
  const changeColour=(colour)=>{
    setColour(colour)
  }
  return (
    <div className='w-full min-h-screen duration-1000 bg-black' style={{backgroundColor:colour}}>
      <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-300 '>
        <button onClick={()=>changeColour('blue')} 
        className='m-3 bg-blue-600 rounded-md p-5'>blue</button>
        <button  onClick={()=>changeColour('green')}className='m-3 bg-green-600 rounded-md p-5'>green</button>
        <button  onClick={()=>changeColour('yellow')}className='m-3 bg-yellow-600 rounded-md p-5'>yellow</button>
      
    </div>
    </div>
  )
}

export default App
