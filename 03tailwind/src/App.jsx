import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const obj={ name: 'Hitesh',
    age: 25,
    address: {
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India'
    }
  }
let arr=[1,,223,9,3]
  return (
    <>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   <h1 className='text-3xl bg-yellow-400 p-3 rounded-md'> hii vite app</h1>
   <Card username="anna" post="mike tyson" newAr={arr}/>
   <Card username='puspa'newobj={obj}/>
   <Card post="liger"/>
    </>
  )
}

export default App
